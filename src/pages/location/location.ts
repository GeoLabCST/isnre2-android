import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  //define type
  public pros: any; 
  public amps: any; 
  public tams: any; 
  public lyrs: any; 

  public prov_ls: any; 
  public amp_ls:any; 
  public tam_ls:any; 
  public lyr_ls:any; 
  public dat: any;

  public errorMessage:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.initializePro();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LocationPage');
  }

  initializePro() {
    this.http.get('http://119.59.125.189/service/isnre_prov.php')
    .subscribe(res => {
      this.pros = res;
      //console.log(res);
    }, error => {
      console.log("Oooops!");
    });
  }

  initializeAmp(provcode: any) {

    this.http.get('http://119.59.125.189/service/isnre_amp.php?prov_code='+provcode)
    .subscribe(res => {
      this.amps = res;
      //console.log(res);
    }, error => {
      console.log("Oooops!");
    });
  }

  initializeTam(ampcode: any) {
    this.http.get('http://119.59.125.189/service/isnre_tam.php?amp_code='+ampcode)
    .subscribe(res => {
      this.tams = res;
      //console.log(res);
    }, error => {
      console.log("Oooops!");
    });
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
    this.dat = {
      pro: this.prov_ls,
      amp: this.amp_ls,
      tam: this.tam_ls,
      lyr: this.lyr_ls
    }
    this.navCtrl.push(MapPage, this.dat)
  }



}
