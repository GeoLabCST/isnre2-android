import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal, AlertController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import L from 'leaflet';
import 'leaflet-measure/dist/leaflet-measure';
import 'leaflet.gridlayer.googlemutant';
// import 'leaflet-draw/dist/leaflet.draw';
import { ShareService } from '../../providers/service/share';

import { LocationPage } from '../location/location';


@IonicPage()
@Component({
  selector: 'page-dss',
  templateUrl: 'dss.html',
})
export class DssPage {
  public map: L.map;
  public control: L.control;
  public marker: L.marker;
  public usrId: string;

  public locType: string;
  public locName: string;
  public locCode: string;
  public bbox: Array<number>;
  public alreadyLyr = [];
  public alreadyTh = [];

  public lyr: string;
  public lyr_ls: any;
  public cql: string;
  public pos: any;
  public pos2: any = [];
  public measure: boolean;
  public mapOtp: any;

  public circle: boolean;
  public drawControl: any;
  public drawnItems: any;

  public state: any;
  public info: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private geolocation: Geolocation,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public shareService: ShareService
  ) {
    this.usrId = navParams.get('usrId');
    this.locType = navParams.get('locType');
    this.locName = navParams.get('locName');
    this.locCode = navParams.get('locCode');
    this.bbox = navParams.get('bbox');
  }

  ionViewDidLoad() {
    this.loadMap();
    // initial map
    if (typeof this.locType !== 'undefined') {
      this.locFn(this.locType, this.locCode, this.bbox);
    } else {
      this.locFn("all", "all", "all");
    }
  }

  ionViewWillEnter() {
    //this.loadMap();
  }

  onMapClick(e) {
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    return this.showInfo(lat, lng);
  }

  loadMap() {
    this.map = L.map('map-dss', {
      center: [13.00, 101.50],
      zoom: 6,
      zoomControl: false,
      //measureControl: true,
      //layersControl: true
    })


    const roads = L.gridLayer.googleMutant({
      type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
    }).addTo(this.map);

    const satellite = L.gridLayer.googleMutant({
      type: 'satellite' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
    });

    const terrain = L.gridLayer.googleMutant({
      type: 'terrain' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
    });

    const c28_foresttype = L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
      layers: 'isnre:c28_foresttype',
      format: 'image/png',
      zIndex: 5,
      transparent: true
    });

    const c29_nrf = L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
      layers: 'isnre:c29_nrf',
      format: 'image/png',
      zIndex: 5,
      transparent: true
    });

    const c30_nprk = L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
      layers: 'isnre:c30_nprk',
      format: 'image/png',
      zIndex: 5,
      transparent: true
    });

    const c32_wldsshp = L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
      layers: 'isnre:c32_wldsshp',
      format: 'image/png',
      zIndex: 5,
      transparent: true
    });

    const c33_nhw = L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
      layers: 'isnre:c33_nhw',
      format: 'image/png',
      zIndex: 5,
      transparent: true
    });

    const c31_fprk = L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
      layers: 'isnre:c31_fprk',
      format: 'image/png',
      zIndex: 5,
      transparent: true
    });

    const c02_province = L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
      layers: 'isnre:c02_province',
      format: 'image/png',
      zIndex: 5,
      transparent: true
    });

    const c03_district = L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
      layers: 'isnre:c03_district',
      format: 'image/png',
      zIndex: 5,
      transparent: true
    });

    const c04_subdistrict = L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
      layers: 'isnre:c04_subdistrict',
      format: 'image/png',
      zIndex: 5,
      transparent: true
    });

    const baseLayers = {
      "แผนที่ถนน": roads,
      "แผนที่ภาพดาวเทียม": satellite,
      "แผนที่ภูมิประเทศ": terrain.addTo(this.map),
    };

    const overlayLayers = {
      "เขตจังหวัด": c02_province.addTo(this.map),
      "เขตอำเภอ": c03_district.addTo(this.map),
      "เขตตำบล": c04_subdistrict,
      "ขอบเขตชนิดของป่าไม้": c28_foresttype.addTo(this.map),
      "ป่าสงวนแห่งชาติ": c29_nrf,
      "อุทยานแห่งชาติ": c30_nprk,
      "วนอุทยาน": c31_fprk,
      "เขตรักษาพันธุ์สัตว์ป่า": c32_wldsshp,
      "เขตห้ามล่าสัตว์ป่า": c33_nhw,
    };

    L.control.layers(baseLayers, overlayLayers).addTo(this.map);
    //set measure default
    this.measure = false;
    this.circle = false;
    this.info = false;

    //get featureinfo
    //this.map.on('click', this.showInfo);
    this.map.on('click', (e) => {
      // 
      if (this.state == 'info') {
        this.onMapClick(e)
      } else if (this.state == 'buffer') {
        this.showBuffer();
      }
    });
  }

  locFn(locType, locCode, bbox) {
    if (locType == 'all') {
      this.alreadyLyr.push('c02_province');
      this.alreadyTh.push('ขอบเขตจังหวัด');
      this.lyr = 'c02_province';
      this.mapOtp = {
        layers: 'isnre:' + this.lyr,
        format: 'image/png',
        zIndex: 5,
        transparent: true
      }
      L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
      this.map.fitBounds([
        [7.09056009354302, 104.18985100564],
        [19.7358085431644, 98.6106951024982]
      ]);
    } else if (locType == 'tam') {
      this.alreadyLyr.push('c04_subdistrict');
      this.alreadyTh.push('ขอบเขตตำบล');
      this.lyr = 'c04_subdistrict';
      this.cql = 'tamcode=' + locCode;
      this.mapOtp = {
        layers: 'isnre:' + this.lyr,
        format: 'image/png',
        transparent: true,
        zIndex: 5,
        CQL_FILTER: this.cql
      }
      L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
      this.map.fitBounds([
        [Number(bbox[1]), Number(bbox[2])],
        [Number(bbox[3]), Number(bbox[0])]
      ]);
    } else if (locType == 'amp') {
      this.alreadyLyr.push('c03_district');
      this.alreadyTh.push('ขอบเขตอำเภอ');
      this.lyr = 'c03_district';
      this.cql = 'ampcode=' + locCode;
      this.mapOtp = {
        layers: 'isnre:' + this.lyr,
        format: 'image/png',
        transparent: true,
        zIndex: 5,
        CQL_FILTER: this.cql
      }
      L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
      this.map.fitBounds([
        [Number(bbox[1]), Number(bbox[2])],
        [Number(bbox[3]), Number(bbox[0])]
      ]);
    } else if (locType == 'pro') {
      this.alreadyLyr.push('c02_province');
      this.alreadyTh.push('ขอบเขตจังหวัด');
      this.lyr = 'c02_province';
      this.cql = 'procode=' + locCode;
      this.mapOtp = {
        layers: 'isnre:' + this.lyr,
        format: 'image/png',
        transparent: true,
        zIndex: 5,
        CQL_FILTER: this.cql
      }
      L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
      this.map.fitBounds([
        [Number(bbox[1]), Number(bbox[2])],
        [Number(bbox[3]), Number(bbox[0])]
      ]);
    }
  }

  lyrFn(lyr_ls) {
    //list layers
    this.map.eachLayer(function (l) {
      if (l instanceof L.TileLayer.WMS) {
        l.remove();
      }
    })

    //add layer
    for (let ls in lyr_ls) {
      this.lyr = lyr_ls[ls];

      if (typeof this.locType == 'undefined') {
        this.mapOtp = {
          layers: 'isnre:' + this.lyr,
          format: 'image/png',
          zIndex: 5,
          transparent: true
        }
      } else {
        this.mapOtp = {
          layers: 'isnre:' + this.lyr,
          format: 'image/png',
          transparent: true,
          zIndex: 5,
          CQL_FILTER: this.cql
        }
      }
      L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
    }
  }

  addMeasure() {
    let options = {
      position: 'topleft',
      primaryLengthUnit: 'meters',
      secondaryLengthUnit: 'kilometers',
      primaryAreaUnit: 'sqmeters',
      activeColor: '#ff7700',
      completedColor: '#ff0000',
      someNewUnit: {
        factor: 1600, // Required. Factor to apply when converting to this unit. Length in meters or area in sq meters will be multiplied by this factor.
        display: 'rai', // Required. How to display in results, like.. "300 Meters (0.3 My New Unit)".
        decimals: 2 // Number of decimals to round results when using this unit. `0` is the default value if not specified.
      },
      myOtherNewUnit: {
        factor: 1234,
        display: 'My Other Unit',
        decimals: 0
      }
    };

    if (this.measure == false) {
      this.control = L.control.measure(options).addTo(this.map);
      this.measure = true;
    } else {
      this.measure = false;
      this.map.removeControl(this.control);
    }
  }

  addLocation() {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((res) => {
      this.pos = [res.coords.latitude, res.coords.longitude];
      this.map.setView(this.pos, 16);
      this.marker = L.marker(this.pos, { draggable: true }).addTo(this.map).bindPopup("ตำแหน่งของคุณ").openPopup();
      console.log(this.pos);
      // drage marker
      this.marker.on("dragend", function (e) {
        console.log([e.target._latlng.lat, e.target._latlng.lng])
      });
    })
  }

  addSelectarea() {
    this.navCtrl.push(LocationPage, {});
  }

  addLayer() {
    const modelLyr: Modal = this.modalCtrl.create('LayerPage', {
      alreadyLyr: this.alreadyLyr,
      alreadyTh: this.alreadyTh
    });
    modelLyr.present();
    //call lyrFn when onDidDismiss
    modelLyr.onDidDismiss((data) => {
      this.alreadyLyr = data.lyr_ls;
      this.alreadyTh = data.lyr_th;
      //load array layer to map
      this.lyrFn(this.alreadyLyr);
    });
  }

  addLegend() {
    const modalLeg: Modal = this.modalCtrl.create('LegendPage', {
      alreadyLyr: this.alreadyLyr,
      alreadyTh: this.alreadyTh
    });
    modalLeg.present();
  }

  addData() {
    if (typeof this.pos == 'undefined') {
      let alert = this.alertCtrl.create({
        //title: 'คุณยังไม่ได้ระบุตำแหน่ง!',
        subTitle: 'กรุณากดที่ปุ่ม "ตำแหน่งปัจจุบัน" และขยับ marker ไปยังตำแหน่งที่ต้องการก่อนเพิ่มข้อมูล',
        buttons: ['ตกลง']
      });
      alert.present();
    } else {
      const modalAdd: Modal = this.modalCtrl.create('AddDataPage', {
        pos: this.marker.getLatLng(),
        usrId: this.usrId
      });
      modalAdd.present();
      //console.log(this.pos);
    }
  }

  enableInfo() {
    if (this.info == false) {
      this.state = 'info';
      this.info = true;
    } else {
      this.state = '';
      this.info = false;
    }
  }

  showInfo(lat: number, lng: number) {
    //this.shareService.setUserData(e);
    const modalLeg: Modal = this.modalCtrl.create('InfoPage', {
      lat: lat,
      lng: lng,
      alreadyLyr: this.alreadyLyr,
      alreadyTh: this.alreadyTh
    });
    modalLeg.present();
  }

  showBuffer() {
    const modelLyr: Modal = this.modalCtrl.create('BufferPage', {
      alreadyLyr: this.alreadyLyr,
      alreadyTh: this.alreadyTh
    });
    modelLyr.present();
    modelLyr.onDidDismiss((data) => {
      this.alreadyLyr = data.lyr_ls;
      this.alreadyTh = data.lyr_th;
      this.lyrFn(this.alreadyLyr);
    });
  }

  reload() {
    window.location.reload();
  }

}
