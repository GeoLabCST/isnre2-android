import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-legend',
  templateUrl: 'legend.html',
})
export class LegendPage {

  public lyr: any;
  public legend: Array<string>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.lyr = navParams.get('lyr');
  }

  ionViewDidLoad() {
    console.log(this.lyr);
  }

  loadLegend(){
    const path = "http://119.59.125.189/geoserver/wms?Service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=25&HEIGHT=25&LAYER=isnre:";    
    for(let i in this.lyr){
      this.legend.push(path+i);
      console.log(this.legend);
    }
 
  }

}
