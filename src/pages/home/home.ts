import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import L from 'leaflet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public map: L.map;
  public marker: L.marker; 
  public items: string[]; 

  constructor(
    public navCtrl: NavController
  ) {
    this.initializeItems();
  }

  ionViewDidLoad(){
    this.loadMap();  
  }  

  loadMap(){  
    this.map = L.map('map',{
      center: [13.00, 101.50],
      zoom: 5,
      zoomControl: false
    })

    let osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'OSM'
    });

    let mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
        '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
        'dDXD2lMJpTfCVsVuA').addTo(this.map);

    let baseLayers = {
      "Mapbox": mapbox,
      "OpenStreetMap": osm
    };

    let overlays = {
      //"hcenter": hcenter,
      //"dengue": dengue
    };
    //L.control.layers(baseLayers, overlays).addTo(this.map);  
    //this.showLocation();
  }

  initializeItems() {
      this.items = [
      'บึงกาฬ',
      'บุรีรัมย์',
      'ขอนแก่น',
      'กระบี่',
      'ปทุมธานี',
      'พัทลุง',
      'พะเยา',
      'พิษณุโลก',
      'ปราจีนบุรี',
      'ประจวบคิรีขันธ์',
      'ราชบุรี',
      'ระยอง',
      'สระแก้ว',
      'สระบุรี',
    ]
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
