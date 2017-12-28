import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-layers',
  templateUrl: 'layers.html',
})
export class LayersPage {
  public items : Array<string>;
  public tam : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.tam = navParams.get('dat');   
    this.initializeItems(this.tam.tamcode);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LayersPage');
  }

  initializeItems(ampcode: string) {
    this.http.get('http://119.59.125.189/service/isnre_lyr.php')
    .subscribe(res => {
      console.log(res);
    }, error => {
      console.log("Oooops!");
    });
  }

  itemSelected(item: string) {
    //console.log("Selected Item", item);
    this.navCtrl.push(MapPage, {
      lyr: item,
      dat: this.navParams.get('dat')
    })
  }


}
