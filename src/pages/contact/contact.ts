import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../providers/service/share';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
	
  public usrData: object;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
    public shareService: ShareService) {

    // Receiving data via Service
    this.usrData = this.shareService.getUserData();
    console.log(this.usrData);
    //console.log(this.pos.lng);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
