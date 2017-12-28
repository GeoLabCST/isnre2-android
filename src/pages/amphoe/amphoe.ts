import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { TambonPage } from '../tambon/tambon';
import { LayersPage } from '../layers/layers';

@IonicPage()
@Component({selector: 'page-amphoe', templateUrl: 'amphoe.html'})
export class AmphoePage {

  public items : any;
  public prov : any;

  constructor(
    public navCtrl : NavController, 
    public navParams : NavParams,
    public http: HttpClient
  ) {    
    this.prov = navParams.get('dat');   
    this.initializeItems(this.prov.prov_code);
  }

  initializeItems(provcode: string) {
    this.http.get('http://119.59.125.189/service/isnre_amp.php?prov_code='+provcode)
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
      dat: this.prov
    })
  }

  itemSelected(item: string) {
    //console.log("Selected Item", item);
    this.navCtrl.push(TambonPage, {
      dat: item
    })

  }

}
