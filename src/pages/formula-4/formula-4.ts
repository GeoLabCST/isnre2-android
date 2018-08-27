import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Formula_4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { AboutPage } from '../about/about';
import { Formula_1Page } from '../formula-1/formula-1';
import { Formula_2Page } from '../formula-2/formula-2';
import { Formula_3Page } from '../formula-3/formula-3';
import { Screenshot } from '@ionic-native/screenshot';

@IonicPage()
@Component({
  selector: 'page-formula-4',
  templateUrl: 'formula-4.html',
})
export class Formula_4Page {
  screen: any;
  state: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formula_4Page');
  }


  reset() {
    var self = this;
    setTimeout(function () {
      self.state = false;
    }, 1000);
  }


  screenShot() {
    this.screenshot.save('jpg', 80).then(res => {
      this.screen = res.filePath;
      this.state = true;
      this.reset();
    });
  }
  about1() {
    this.navCtrl.push(AboutPage);
  }
  Formula1() {
    this.navCtrl.push(Formula_1Page);
  }
  Formula2() {
    this.navCtrl.push(Formula_2Page);
  }
  Formula3() {
    this.navCtrl.push(Formula_3Page);
  }

}
