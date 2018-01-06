import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {



  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }  

  signup(){
    this.navCtrl.push(RegisterPage);
  }


  public reportForm : FormGroup;
  public email_user : FormControl;
  public pass_user : FormControl;



  constructor(
    public fb : FormBuilder,  
    private navCtrl : NavController, 
    private loadingCtrl : LoadingController,
    public http: HttpClient){

    this.email_user = fb.control('', Validators.required);
    this.pass_user = fb.control('', Validators.required);
    this.reportForm = fb.group({
      'email_user': this.email_user, 
      'pass_user': this.pass_user
    })
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
      console.log(res);
      
      // if (res.message == 'error') {
      //    loader.dismiss();      
      //     let alert=this.alertCtrl.create({
      //       title: 'E-Mail หรือรหัสผ่านของท่านไม่ถูกต้อง!',
      //       subTitle: 'กรุณาลองอีกครั้ง หรือสมัครสมาชิกใหม่',
      //       buttons:['ok']
      //     });
      //     alert.present();     
      // }else if(res.message == 'success'){
      //    loader.dismiss(); 
      //     this.gotoindex();      
      //     let alert=this.alertCtrl.create({
      //       title: 'E-Mail และรหัสผ่านถูกต้อง',
      //       subTitle: 'กำลังเข้าสู่ระบบ',
      //       buttons:['ok']
      //     });
      //     // alert.present();     
      // }


      
      //this.presentToast("Image uploaded successfully");
    }, error => {
      console.log("Oooops!");
      loader.dismiss();
    });

  


  }  

  gotoindex(){
    this.navCtrl.push(TabsPage);
  }



}
