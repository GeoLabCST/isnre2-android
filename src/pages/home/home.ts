import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AmphoePage } from '../amphoe/amphoe';

import { LayersPage } from '../layers/layers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: any; 
  public errorMessage:string;

  constructor(
    public navCtrl: NavController,
    public http: HttpClient
  ) {
    this.initializeItems();
  }

  ionViewDidLoad(){
    //this.loadMap();  
  }  
 

  initializeItems() {
    this.http.get('http://119.59.125.189/service/isnre_prov.php')
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
      dat: 'all'
    })
  }

  itemSelected(item: string) {
    //console.log("Selected Item", item);
    this.navCtrl.push(AmphoePage, {
      dat: item
    })

  }

}
