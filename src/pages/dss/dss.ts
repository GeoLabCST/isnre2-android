import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import L from 'leaflet';

@IonicPage()
@Component({
  selector: 'page-dss',
  templateUrl: 'dss.html',
})
export class DssPage {
  public map : L.map;
  public control: L.control;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DssPage');
    this.loadMap();
  }

  loadMap(){
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

    L.control.layers(baseLayers,overlayLayers).addTo(this.map);
  }

}
