import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { MapPage } from '../map/map';



@IonicPage()
@Component({
  selector: 'page-layer',
  templateUrl: 'layer.html',
})
export class LayerPage {

  public pro : string;
  public amp : string;
  public tam : string;
  public bbox: any;
  //public lyr_old: any;
  public lyrs: any;   
  public lyr_ls:any;  
  public dat: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.initializeLyr();
    this.pro = navParams.get('pro');
    this.amp = navParams.get('amp');
    this.tam = navParams.get('tam');
    this.bbox = navParams.get('bbox');
    //this.lyr_old = navParams.get('lyr')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LayerPage');
  }

  initializeLyr() {
    this.http.get('http://119.59.125.189/service/isnre_lyr.php')
    .subscribe(res => {
      this.lyrs = res;
      //console.log(res);
    }, error => {
      console.log("Oooops!");
    });
  }

  itemSelected(item: string) {

    //console.log('เก่า'+this.lyr_old+'ใหม่'+this.lyr_ls);
    //let lyr_new = this.lyr_old.concat(this.lyr_ls);
    console.log(this.lyr_ls);

    this.dat = {
      pro: this.pro,
      amp: this.amp,
      tam: this.tam,
      lyr: this.lyr_ls,
      bbox: this.bbox

    }
    this.navCtrl.setRoot(MapPage, this.dat)
  }

}
