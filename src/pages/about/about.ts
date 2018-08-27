import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { Formula_1Page } from '../formula-1/formula-1';
import { Formula_2Page } from '../formula-2/formula-2';
import { Formula_3Page } from '../formula-3/formula-3';
import { Formula_4Page } from '../formula-4/formula-4';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  screen: any;
  state: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
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


  Formula1() {
    this.navCtrl.push(Formula_1Page);
  }
  Formula2() {
    this.navCtrl.push(Formula_2Page);
  }
  Formula3() {
    this.navCtrl.push(Formula_3Page);
  }
  Formula4() {
    this.navCtrl.push(Formula_4Page);
  }

}
