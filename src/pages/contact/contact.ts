import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ShareService } from '../../providers/service/share';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
  pet: string = "puppies";
  public usrData: object;
  res: any
  res2: any
  public reportForm: FormGroup
  public name_user: FormControl
  public lname_user: FormControl
  public tel_user: FormControl
  public prov_user: FormControl
  public name_stu: FormControl
  public amp_user: FormControl
  public tam_user: FormControl
  public email_user: FormControl
  public pass_user: FormControl

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public http: HttpClient,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public shareService: ShareService) {

    // Receiving data via Service
    this.usrData = this.shareService.getUserData();
    console.log(this.usrData);
    //console.log(this.pos.lng);
    this.reportForm = fb.group({
      'name_user': this.name_user,
      'lname_user': this.lname_user,
      'tel_user': this.tel_user,
      'prov_user': this.prov_user,
      'amp_user': this.amp_user,
      'tam_user': this.tam_user,
      'email_user': this.email_user,
      'pass_user': this.pass_user
    })

  }


  updatestu() {
    let loader = this.loadingCtrl.create({ content: "กำลังบันทึกข้อมูล.." });

    let data = JSON.stringify({
      'name_user': this.reportForm.controls['name_user'].value,
      'lname_user': this.reportForm.controls['lname_user'].value,
      'tel_user': this.reportForm.controls['tel_user'].value,
      'prov_user': this.reportForm.controls['prov_user'].value,
      'amp_user': this.reportForm.controls['amp_user'].value,
      'tam_user': this.reportForm.controls['tam_user'].value,
      'email_user': this.reportForm.controls['email_user'].value,
      'pass_user': this.reportForm.controls['pass_user'].value,
      'id': '8'

    });


    console.log(data)
    loader.present();
    //http://localhost/isnre/php_app/update_profile.php
    this.http.post('http://119.59.125.189/isnre2/php_app/update_profile.php', data)
      .subscribe(res => {
        this.res = res;


        if (this.res.message == 'error') {
          loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'ไม่สามารถบันทึกข้อมูลได้',
            subTitle: 'กรุณาลองอีกครั้ง',
            buttons: ['ok']
          });
          alert.present();
        } else if (this.res.message == 'success') {
          loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'แก้ไขข้อมูลเรียบร้อยแล้ว',
            subTitle: '',
            buttons: ['ok']
          });

          this.shareService.setUserData(this.res);
          alert.present();
        } else {
          loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'ไม่สามารถบันทึกข้อมูลได้',
            subTitle: 'กรุณาลองอีกครั้ง',
            buttons: ['ok']
          });
          alert.present();
        }


      }, error => {
        console.log("Oooops!");
        loader.dismiss();
      });




  }


  ionViewDidLoad() {

    let id_user = this.shareService.usrData.id_user;

    let data2 = JSON.stringify({
      'id_user': id_user
    })
    //http://119.59.125.189/isnre2/php_app/view_stat.php

    let loader = this.loadingCtrl.create({ content: "...Loading" });
    loader.present();
    this.http.post("http://119.59.125.189/isnre2/php_app/view_stat.php", data2)
      .subscribe(res2 => {
        this.res2 = res2
        console.log(res2)
        loader.dismiss();
      }
      )
  }

}
