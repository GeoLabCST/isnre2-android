import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  public lat: number;
  public lng: number;
  public info: any;

  public alreadyLyr:any;
  public alreadyTh:any;
  public items=[];

  constructor(
    public http : HttpClient,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.lat = navParams.get('lat');
    this.lng = navParams.get('lng');
    this.alreadyLyr = navParams.get('alreadyLyr');
    this.alreadyTh = navParams.get('alreadyTh');
    //console.log(this.info);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad InfoPage');
    this.getInfo();
  }

  getInfo(){

    for(let l in this.alreadyLyr){
      console.log(this.alreadyLyr[l]);
      console.log(this.alreadyTh[l]); 
      let lyrName = {
        "lyr": this.alreadyTh[l]
      };   
      this.http.get('http://119.59.125.189/service/isnre_getfeatureinfo.php?lat='+this.lat+'&lon='+this.lng+'&lyr='+this.alreadyLyr[l])
      .subscribe(res => {
        setTimeout(() => {
          let lyrVal = res[0];
          let lyrDat = Object.assign(lyrName, lyrVal)
          this.items.push(lyrDat); 
          console.log(this.items);
        }, 1000);
      }, error => {
        console.log("Oooops!");
      });  
    }
  }

  closeLegend(){
    this.viewCtrl.dismiss();
  }

}
