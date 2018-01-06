import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MapPage } from '../map/map';
//import { LocationPage } from '../location/location';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = MapPage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  //tab4Root: any = LocationPage;
  constructor() {
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TabsPage');
  }

}
