import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { Formula_1Page } from '../pages/formula-1/formula-1';
import { Formula_2Page } from '../pages/formula-2/formula-2';
import { Formula_3Page } from '../pages/formula-3/formula-3';
import { Formula_4Page } from '../pages/formula-4/formula-4';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'การนำขยะไปแปรรูป', component: AboutPage },
      { title: 'นำขยะรีไซเคิลไปจำหน่าย', component: Formula_1Page  },
      { title: 'อนุรักษ์ป่าพื้นที่สีเขียวเดิม', component: Formula_2Page },
      { title: 'การปลูกต้นไม้ใหม่', component: Formula_3Page },
      { title: 'การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง', component: Formula_4Page }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
