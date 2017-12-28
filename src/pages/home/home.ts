import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import L from 'leaflet';
import 'leaflet-measure/dist/leaflet-measure';

import { LocationPage } from '../location/location';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public map : L.map;

  constructor(
    public navCtrl: NavController,
    public http: HttpClient
  ) {
    
  }

  ionViewDidLoad(){  
    this.loadMap();    
  }   

  loadMap() {
    this.map = L.map('map1', {
      center: [13.00, 101.50],
      zoom: 5,
      zoomControl: false,
      //measureControl: true,
      //layersControl: true
    })

    const url = "http://119.59.125.189/geoserver/ows?";

    let mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
        '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
        'dDXD2lMJpTfCVsVuA')
      .addTo(this.map);

    let pro = L.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
        layers: 'isnre:c02_province',
        format: 'image/png',
        transparent: true
      }); 
     
    // let baseLayers = {   
    //   "Mapbox": mapbox
    // }; 
    
    // let overlays = {
    //   "ขอบเขตจังหวัด": pro.addTo(this.map)
    // }; 
   //L.control.layers(baseLayers, overlays).addTo(this.map);

  }   

  addMeasure(){
    let options = { position: 'topright' }
    L.control.measure(options).addTo(this.map);
  }


  gotoLocation(){
    this.navCtrl.setRoot(LocationPage, {
      //location: this.pos
    })
  }




}
