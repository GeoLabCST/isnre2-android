import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Formula_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { AboutPage } from '../about/about';
import { Formula_2Page } from '../formula-2/formula-2';
import { Formula_3Page } from '../formula-3/formula-3';
import { Formula_4Page } from '../formula-4/formula-4';
@IonicPage()
@Component({
  selector: 'page-formula-1',
  templateUrl: 'formula-1.html',
})
export class Formula_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formula_1Page');
  }


    about1(){
    this.navCtrl.push(AboutPage);
  }
    Formula2(){
    this.navCtrl.push(Formula_2Page);
  }
    Formula3(){
    this.navCtrl.push(Formula_3Page);
  }
    Formula4(){
    this.navCtrl.push(Formula_4Page);
  }

}
