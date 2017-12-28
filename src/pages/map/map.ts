import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {HttpClient} from '@angular/common/http';
import {Geolocation} from '@ionic-native/geolocation';
import L from 'leaflet';

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
  public layer: string[];

  constructor(public navCtrl : NavController, public navParams : NavParams, public http : HttpClient) {
    //this.prov = navParams.get('lyr');
    this.pro = navParams.get('pro');
    this.amp = navParams.get('amp');
    this.tam = navParams.get('tam');
    this.lyr = navParams.get('lyr');
    console.log(this.pro + '-' + this.amp + '-' + this.tam + '-' + this.lyr);
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = L.map('map', {
      center: [13.00, 101.50],
      zoom: 5,
      zoomControl: false
    })

    let osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attributions: 'OSM'});

    let mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
        '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
        'dDXD2lMJpTfCVsVuA')
      .addTo(this.map);
        
    let baseLayers = {   
      "Mapbox": mapbox
    }; 
    
    let overlays = {}; 

    const url = "http://119.59.125.189/geoserver/ows?";
    let l: string;

    for (let j in this.lyr) {
      
      L.tileLayer.wms(url, {
          layers: this.lyr[j],
          format: 'image/png',
          transparent: true,
          CQL_FILTER: 'prov_code=' + this.pro
        }).addTo(this.map);   
        

    } 
   L.control.layers(baseLayers, overlays).addTo(this.map);

  }   

}