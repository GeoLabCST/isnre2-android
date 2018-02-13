import { TabsPage } from './../tabs/tabs';
import {Component} from '@angular/core';
import {IonicPage, NavController, LoadingController, AlertController, Modal, ModalController, Events} from 'ionic-angular';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { ShareService } from '../../providers/service/share';

import { RegisterPage } from '../register/register';
//import { TabsPage } from '../tabs/tabs';
//import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  public reportForm : FormGroup;
  public email_user : FormControl;
  public pass_user : FormControl;
  public res: any;

  constructor(
    public fb : FormBuilder,  
    private navCtrl : NavController, 
    private loadingCtrl : LoadingController,
    private alertCtrl : AlertController,
    private modalCtrl: ModalController,
    public http: HttpClient,
    public shareService: ShareService,
    public events: Events
  ){
    this.email_user = fb.control('', Validators.required);
    this.pass_user = fb.control('', Validators.required);
    this.reportForm = fb.group({
      'email_user': this.email_user, 
      'pass_user': this.pass_user
    })
  }

  signup(){
    this.navCtrl.push(RegisterPage);
  }

  submit() {
    let loader = this.loadingCtrl.create({content: "กำลังเข้าสู่ระบบ.."});  
    let email_user = this.reportForm.controls['email_user'].value;
    let pass_user = this.reportForm.controls['pass_user'].value;
   
    let data = JSON.stringify({
      'email_user':email_user,
      'pass_user':pass_user
    });

    loader.present();    
    this.http.post('http://119.59.125.189/isnre2/php_app/checklogin.php', data)
    .subscribe(res => {
       this.res = res;
       console.log(res);
      
      if (this.res.message == 'error') {
         loader.dismiss();      
          let alert=this.alertCtrl.create({
            title: 'E-Mail หรือรหัสผ่านของท่านไม่ถูกต้อง!',
            subTitle: 'กรุณาลองอีกครั้ง หรือสมัครสมาชิกใหม่',
            buttons:['ok']
          });
          alert.present();     
      }else if(this.res.message == 'success'){
         loader.dismiss(); 
          this.gotoindex();    
      }      
    }, error => {
      console.log("Oooops!");
      loader.dismiss();
    });
  }  

  gotoindex(){  
    // Sharing data using service
    this.shareService.setUserData(this.res);
    this.navCtrl.push(TabsPage);
  }

  gotoForgot(){
    const modalLeg: Modal =  this.modalCtrl.create('ForgetPage');
    modalLeg.present();
  }

  



}
