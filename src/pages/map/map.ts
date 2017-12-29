import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {HttpClient} from '@angular/common/http';
import {Geolocation} from '@ionic-native/geolocation';
import L from 'leaflet';
import 'leaflet-measure/dist/leaflet-measure';

import { LocationPage } from '../location/location';
import { LayerPage } from '../layer/layer';
import { LegendPage } from '../legend/legend';

@IonicPage()
@Component({selector: 'page-map', templateUrl: 'map.html'})
export class MapPage {
  public map : L.map;
  public marker : L.marker;
  public items : string[];
  public pro : string;
  public amp : string;
  public tam : string;
  public lyr : string[];
  public loc : string;
  public layer: string[];
  public bbox:Array<number>;
  public dat: any;

  constructor(
    public navCtrl : NavController, 
    public navParams : NavParams, 
    public http : HttpClient) {
      this.pro = navParams.get('pro');
      this.amp = navParams.get('amp');
      this.tam = navParams.get('tam');
      this.lyr = navParams.get('lyr');
      this.bbox = navParams.get('bbox');
      //console.log(this.pro + '-' + this.amp + '-' + this.tam + '-' + this.lyr);
  }

  ionViewDidLoad() {
    this.loadMap();
    // setTimeout(() => {   
    //   //loading.dismiss(); 
    // }, 1000);

  }

  ionViewWillEnter(){
    //this.loadMap();
  }

  loadMap() {
    this.map = L.map('map', {
      center: [13.00, 101.50],
      zoom: 5,
      zoomControl: false,
      //measureControl: true,
      //layersControl: true
    })
    

    this.map.fitBounds([
      [Number(this.bbox[1]), Number(this.bbox[2])],
      [Number(this.bbox[3]), Number(this.bbox[0])]
    ]);

    let osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attributions: 'OSM'});

    let mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
        '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
        'dDXD2lMJpTfCVsVuA')
      .addTo(this.map);
        
    let baseLayers = {   
      "Mapbox": mapbox
    };        
 
    if(typeof this.tam !== 'undefined'){  
      this.loc = 'tamcode=' + this.tam;
    }else if(typeof this.amp !== 'undefined'){
      this.loc = 'ampcode=' + this.amp;
    }else{
      this.loc = 'procode=' + this.pro;
    }

    for (let j in this.lyr) {      
      L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
          layers: this.lyr[j],
          format: 'image/png',
          transparent: true,
          CQL_FILTER: this.loc
        }).addTo(this.map);          

    } 
   //L.control.layers(baseLayers, overlays).addTo(this.map);

  } 
  
  addMeasure(){
    let options = { position: 'topright' }
    L.control.measure(options).addTo(this.map);
    this.map.fitBounds([
      [40.712, -74.227],
      [40.774, -74.125]
  ]);
  }

  gotoLocation(){
    this.navCtrl.setRoot(LocationPage, {
      //location: this.pos
    })
  }

  gotoLayer(){
    this.navCtrl.push(LayerPage,{
      pro: this.pro,
      amp: this.amp,
      tam: this.tam,
      lyr: this.lyr,
      bbox: this.bbox
    });
  }

  gotoLegend(){
    this.navCtrl.push(LegendPage,{
      lyr: this.lyr
    });
  }

}