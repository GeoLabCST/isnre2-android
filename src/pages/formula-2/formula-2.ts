import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Formula_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { AboutPage } from '../about/about';
import { Formula_1Page } from '../formula-1/formula-1';
import { Formula_3Page } from '../formula-3/formula-3';
import { Formula_4Page } from '../formula-4/formula-4';
@IonicPage()
@Component({
  selector: 'page-formula-2',
  templateUrl: 'formula-2.html',
})
export class Formula_2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formula_2Page');
  }


    about1(){
    this.navCtrl.push(AboutPage);
  }
    Formula1(){
    this.navCtrl.push(Formula_1Page);
  }
    Formula3(){
    this.navCtrl.push(Formula_3Page);
  }
    Formula4(){
    this.navCtrl.push(Formula_4Page);
  }

}
