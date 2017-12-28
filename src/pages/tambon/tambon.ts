import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { LayersPage } from '../layers/layers';

@IonicPage()
@Component({
  selector: 'page-tambon',
  templateUrl: 'tambon.html',
})
export class TambonPage {
  public items : any;
  public amp : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.amp = navParams.get('dat');   
    this.initializeItems(this.amp.ampcode);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TambonPage');
  }

  initializeItems(ampcode: string) {
    this.http.get('http://119.59.125.189/service/isnre_tam.php?amp_code='+ampcode)
    .subscribe(res => {
      this.items = res;
      console.log(res);
    }, error => {
      console.log("Oooops!");
    });
  }

  allSelected(item: string) {
    //console.log("Selected Item", item);
    this.navCtrl.push(LayersPage, {
      dat: this.amp
    })
  }

  itemSelected(item: string) {
    //console.log("Selected Item", item);
    this.navCtrl.push(LayersPage, {
      dat: item
    })
  }

}
