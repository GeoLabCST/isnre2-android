import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Formula_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { AboutPage } from '../about/about';
import { Formula_1Page } from '../formula-1/formula-1';
import { Formula_2Page } from '../formula-2/formula-2';
import { Formula_4Page } from '../formula-4/formula-4';
@IonicPage()
@Component({
  selector: 'page-formula-3',
  templateUrl: 'formula-3.html',
})
export class Formula_3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formula_3Page');
  }


    about1(){
    this.navCtrl.push(AboutPage);
  }
    Formula1(){
    this.navCtrl.push(Formula_1Page);
  }
    Formula2(){
    this.navCtrl.push(Formula_2Page);
  }
    Formula4(){
    this.navCtrl.push(Formula_4Page);
  }

}
