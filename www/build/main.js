webpackJsonp([14],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Contact Page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content padding>\n\n  <h3>Contact Page</h3>\n\n</ion-content>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {HomePage} from '../home/home';

var RegisterPage = (function () {
    function RegisterPage(transfer, fb, camera, navCtrl, navParams, loadingCtrl, alertCtrl, toastCtrl, http) {
        this.transfer = transfer;
        this.fb = fb;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.location = navParams.get('location');
        this.name_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.lname_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.tel_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.prov_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.amp_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.tam_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.email_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.pass_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.level_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.reportForm = fb.group({
            'name_user': this.name_user,
            'lname_user': this.lname_user,
            'tel_user': this.tel_user,
            'prov_user': this.prov_user,
            'amp_user': this.amp_user,
            'tam_user': this.tam_user,
            'email_user': this.email_user,
            'pass_user': this.pass_user,
            'level_user': this.level_user
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log(this.location);
    };
    RegisterPage.prototype.takePicture = function () {
        var _this = this;
        var imgCam = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG
        };
        this.camera.getPicture(imgCam).then(function (imageData) {
            _this.imageURI = imageData;
            _this.imageFileName = imageData.substr(imageData.lastIndexOf('/') + 1);
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage.prototype.submit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "กำลังบันทึกข้อมูล.." });
        var name_user = this.reportForm.controls['name_user'].value;
        var lname_user = this.reportForm.controls['lname_user'].value;
        var tel_user = this.reportForm.controls['tel_user'].value;
        var prov_user = this.reportForm.controls['prov_user'].value;
        var amp_user = this.reportForm.controls['amp_user'].value;
        var tam_user = this.reportForm.controls['tam_user'].value;
        var email_user = this.reportForm.controls['email_user'].value;
        var pass_user = this.reportForm.controls['pass_user'].value;
        var level_user = this.reportForm.controls['level_user'].value;
        var img64 = this.imageFileName;
        var data = JSON.stringify({
            'name_user': name_user,
            'lname_user': lname_user,
            'tel_user': tel_user,
            'prov_user': prov_user,
            'amp_user': amp_user,
            'tam_user': tam_user,
            'email_user': email_user,
            'pass_user': pass_user,
            'level_user': level_user,
            'img64': img64
        });
        loader.present();
        this.http.post('http://119.59.125.189/isnre2/php_app/insert.php', data)
            .subscribe(function (res) {
            // if (res.message == 'error-email') {
            // 	 loader.dismiss(); 
            //    this.gotoHome();      
            //    let alert=this.alertCtrl.create({
            //      title: 'ไม่สามารถบันทึกได้!',
            //      subTitle: 'E-Mail ของท่านเคยมีการสมัครสมาชิกแล้ว กรุณาเข้าสู่ระบบ',
            //      buttons:['ok']
            //    });
            //    alert.present();     
            // }else if(res.message == 'success'){
            // 	 loader.dismiss(); 
            //    this.gotoHome();      
            //    let alert=this.alertCtrl.create({
            //      title: 'ลงทะเบียนเสร็จสิ้น',
            //      subTitle: 'ท่านสามารถ Log in เข้าใช้งานระบบได้ทันที',
            //      buttons:['ok']
            //    });
            //    alert.present();     
            // }else if(res.message == 'error-other'){
            // 	 loader.dismiss();     
            //    let alert=this.alertCtrl.create({
            //      title: 'ไม่สามารถบันทึกข้อมูลได้',
            //      subTitle: 'กรุณาลองอีกครั้ง',
            //      buttons:['ok']
            //    });
            //    alert.present();     
            // }
            //this.presentToast("Image uploaded successfully");
        }, function (error) {
            console.log("Oooops!");
            loader.dismiss();
        });
        //upload image
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'file',
            fileName: this.imageFileName,
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'https://www.gistnu.com/service/fixup_upload.php', options)
            .then(function (res) {
            loader.dismiss();
            _this.gotoHome();
            var alert = _this.alertCtrl.create({
                title: 'ส่งข้อมูลสำเร็จ!',
                subTitle: 'ข้อมูลของคุณถูกส่งเข้าสู่ระบบเรียบร้อยแล้ว',
                buttons: ['ok']
            });
            alert.present();
            //this.presentToast("Image uploaded successfully");
        }, function (err) {
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RegisterPage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */], {});
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\register\register.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>REGISTER</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<!-- Themes Register + logo -->\n\n<ion-content  background-size default-background  id="isnre-font">\n\n        <ion-row wrap padding>\n\n            <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <!--Form-->\n\n                  <form novalidate [formGroup]="reportForm" >\n\n                <div class="form">\n\n                    <!--Form Title-->\n\n                    <h1 title text-right>สมัครสมาชิกใหม่</h1>\n\n                    <!---Input field username-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>ชื่อ</ion-label>\n\n                        <ion-input required type="text" formControlName="name_user" ></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field password-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>นามสกุล</ion-label>\n\n                        <ion-input required type="text" formControlName="lname_user"></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field country-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>เบอร์โทรศัพท์</ion-label>\n\n                        <ion-input required type="number" formControlName="tel_user"   ></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field city-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>จังหวัด</ion-label>\n\n                        <ion-input required type="text" formControlName="prov_user" ></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>อำเภอ</ion-label>\n\n                        <ion-input required type="text" formControlName="amp_user" ></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>ตำบล</ion-label>\n\n                        <ion-input required type="text" formControlName="tam_user" ></ion-input>\n\n                    </ion-item>\n\n\n\n                 \n\n                    <ion-item  no-padding>\n\n                      <ion-label floating>สิทธิ์การใช้งาน</ion-label>\n\n                      <ion-select formControlName="level_user">\n\n                        <ion-option value="operational" >ระดับปฏิบัติการ</ion-option>\n\n                        <ion-option value="analytical">ระดับวิเคราะห์</ion-option>\n\n                        <ion-option value="executive">ระดับบริหาร</ion-option>\n\n                      </ion-select>\n\n                    </ion-item>\n\n\n\n                    <!---Input field email-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>email <small>*ใช้ในการเข้าสู่ระบบ</small></ion-label>\n\n                        <ion-input required type="email" formControlName="email_user" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" ></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>รหัสผ่าน <small>*ใช้ในการเข้าสู่ระบบ</small></ion-label>\n\n                        <ion-input required type="password" formControlName="pass_user"  ></ion-input>\n\n                    </ion-item>\n\n\n\n\n\n                   \n\n\n\n                       <button ion-button block icon-left (click)="takePicture()">\n\n                          <ion-icon ios="ios-camera" md="md-camera"></ion-icon> ถ่ายภาพ\n\n                        </button>\n\n                        <ion-card>\n\n                          <img [src]="imageURI" *ngIf="imageURI" />\n\n                        </ion-card>\n\n                     <hr>\n\n\n\n                    <!---Register button-->\n\n                     <button ion-button block type="submit" [disabled]="!reportForm.valid" (click)="submit()">สร้างบัญชีใหม่</button>\n\n                </div>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		304,
		13
	],
	"../pages/contact/contact.module": [
		303,
		12
	],
	"../pages/formula-1/formula-1.module": [
		305,
		11
	],
	"../pages/formula-2/formula-2.module": [
		307,
		10
	],
	"../pages/formula-3/formula-3.module": [
		308,
		9
	],
	"../pages/formula-4/formula-4.module": [
		306,
		8
	],
	"../pages/layer/layer.module": [
		309,
		7
	],
	"../pages/legend/legend.module": [
		310,
		6
	],
	"../pages/location/location.module": [
		313,
		5
	],
	"../pages/login/login.module": [
		311,
		4
	],
	"../pages/map/map.module": [
		314,
		3
	],
	"../pages/other/other.module": [
		312,
		2
	],
	"../pages/register/register.module": [
		316,
		1
	],
	"../pages/welcome/welcome.module": [
		315,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { LocationPage } from '../location/location';
var TabsPage = (function () {
    //tab4Root: any = LocationPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\tabs\tabs.html"*/'<ion-tabs id="isnre-font">\n  <ion-tab [root]="tab1Root" tabTitle="แผนที่" tabIcon="map"></ion-tab>\n  <!-- <ion-tab [root]="tab4Root" tabTitle="แผนที่2" tabIcon="map"></ion-tab> -->\n  <ion-tab [root]="tab2Root" tabTitle="คำนวนคาร์บอน" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="ตั้งค่า" tabIcon="contacts"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_measure_dist_leaflet_measure__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_measure_dist_leaflet_measure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet_measure_dist_leaflet_measure__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_location__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map('map1', {
            center: [13.00, 101.50],
            zoom: 5,
            zoomControl: false,
        });
        var url = "http://119.59.125.189/geoserver/ows?";
        var mapbox = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
            '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
            'dDXD2lMJpTfCVsVuA')
            .addTo(this.map);
        var pro = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
            layers: 'isnre:c02_province',
            format: 'image/png',
            transparent: true
        }).addTo(this.map);
        // let baseLayers = {   
        //   "Mapbox": mapbox
        // }; 
        // let overlays = {
        //   "ขอบเขตจังหวัด": pro.addTo(this.map)
        // }; 
        //L.control.layers(baseLayers, overlays).addTo(this.map);
    };
    HomePage.prototype.addMeasure = function () {
        var options = { position: 'topright' };
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.control.measure(options).addTo(this.map);
    };
    HomePage.prototype.gotoLocation = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__location_location__["a" /* LocationPage */], {});
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <!-- <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button> -->\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content id="isnre-font">\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="danger"><ion-icon name="arrow-dropup"></ion-icon></button>\n\n        <ion-fab-list side="top">\n\n          <!-- <button ion-fab (click)="addMeasure()"><ion-icon name="git-pull-request"></ion-icon></button> -->\n\n          <button ion-fab (click)="gotoLocation()"><ion-icon name="search"></ion-icon></button>\n\n        </ion-fab-list>\n\n      </ion-fab>\n\n    <div id="map1"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayerPage = (function () {
    function LayerPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.initializeLyr();
        this.pro = navParams.get('pro');
        this.amp = navParams.get('amp');
        this.tam = navParams.get('tam');
        this.bbox = navParams.get('bbox');
        //this.lyr_old = navParams.get('lyr')
    }
    LayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LayerPage');
    };
    LayerPage.prototype.initializeLyr = function () {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_lyr.php')
            .subscribe(function (res) {
            _this.lyrs = res;
            //console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LayerPage.prototype.itemSelected = function (item) {
        //console.log('เก่า'+this.lyr_old+'ใหม่'+this.lyr_ls);
        //let lyr_new = this.lyr_old.concat(this.lyr_ls);
        console.log(this.lyr_ls);
        this.dat = {
            pro: this.pro,
            amp: this.amp,
            tam: this.tam,
            lyr: this.lyr_ls,
            bbox: this.bbox
        };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], this.dat);
    };
    LayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-layer',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\layer\layer.html"*/'<!--\n  Generated template for the LayerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>layer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n            <ion-label>ชั้นข้อมูล</ion-label>\n            <ion-select [(ngModel)]="lyr_ls" multiple="true" interface="action-sheet">\n                <ion-option *ngFor="let lyr of lyrs" [value] = "lyr.lyr">{{lyr.lyr_desc}}</ion-option>\n            </ion-select>\n          </ion-item>\n      </ion-list>\n\n      <button ion-button (click)="itemSelected()">แสดงแผนที่</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\layer\layer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LayerPage);
    return LayerPage;
}());

//# sourceMappingURL=layer.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LegendPage = (function () {
    function LegendPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lyr = navParams.get('lyr');
    }
    LegendPage.prototype.ionViewDidLoad = function () {
        console.log(this.lyr);
    };
    LegendPage.prototype.loadLegend = function () {
        var path = "http://119.59.125.189/geoserver/wms?Service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=25&HEIGHT=25&LAYER=isnre:";
        for (var i in this.lyr) {
            this.legend.push(path + i);
            console.log(this.legend);
        }
    };
    LegendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-legend',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\legend\legend.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>legend</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item *ngFor="let l of legend">{{l}}\n    <img src="{{l}}">Hotspot\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\legend\legend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LegendPage);
    return LegendPage;
}());

//# sourceMappingURL=legend.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtherPage = (function () {
    function OtherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OtherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherPage');
    };
    OtherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-other',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\other\other.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Contact Page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\other\other.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OtherPage);
    return OtherPage;
}());

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_formula_1_formula_1__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_formula_2_formula_2__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_formula_3_formula_3__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_formula_4_formula_4__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_other_other__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_location_location__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_map_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_auth_service__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_formula_1_formula_1__["a" /* Formula_1Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_formula_2_formula_2__["a" /* Formula_2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_formula_3_formula_3__["a" /* Formula_3Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_formula_4_formula_4__["a" /* Formula_4Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formula-1/formula-1.module#Formula_1PageModule', name: 'Formula_1Page', segment: 'formula-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formula-4/formula-4.module#Formula_4PageModule', name: 'Formula_4Page', segment: 'formula-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formula-2/formula-2.module#Formula_2PageModule', name: 'Formula_2Page', segment: 'formula-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formula-3/formula-3.module#Formula_3PageModule', name: 'Formula_3Page', segment: 'formula-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layer/layer.module#LayerPageModule', name: 'LayerPage', segment: 'layer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legend/legend.module#LegendPageModule', name: 'LegendPage', segment: 'legend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_formula_1_formula_1__["a" /* Formula_1Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_formula_2_formula_2__["a" /* Formula_2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_formula_3_formula_3__["a" /* Formula_3Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_formula_4_formula_4__["a" /* Formula_4Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formula_1_formula_1__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formula_2_formula_2__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formula_3_formula_3__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.Formula1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__formula_1_formula_1__["a" /* Formula_1Page */]);
    };
    AboutPage.prototype.Formula2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__formula_2_formula_2__["a" /* Formula_2Page */]);
    };
    AboutPage.prototype.Formula3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__formula_3_formula_3__["a" /* Formula_3Page */]);
    };
    AboutPage.prototype.Formula4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__["a" /* Formula_4Page */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>การนำขยะไปแปรรูป</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content no-padding>\n\n	<ion-fab right bottom>\n\n	    <button ion-fab color="danger"><ion-icon name="arrow-dropup"></ion-icon></button>\n\n	    <ion-fab-list side="top">\n\n	      <button ion-fab >การนำขยะไปแปรรูป</button>\n\n	      <button ion-fab  (click)="Formula1()">นำขยะรีไซเคิลไปจำหน่าย</button>\n\n	      <button ion-fab  (click)="Formula2()">อนุรักษ์ป่าพื้นที่สีเขียวเดิม</button>\n\n	      <button ion-fab  (click)="Formula3()">การปลูกต้นไม้ใหม่</button>\n\n	      <button ion-fab  (click)="Formula4()">การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</button>\n\n	    </ion-fab-list>\n\n	  </ion-fab>\n\n\n\n    <iframe src="http://119.59.125.189/isnre2/pages/formula_app1.php" frameborder="0" width="100%" height="100%"></iframe>\n\n\n\n\n\n\n\n\n\n\n\n	\n\n</ion-content>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_formula_1_formula_1__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_formula_2_formula_2__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_formula_3_formula_3__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_formula_4_formula_4__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'การนำขยะไปแปรรูป', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */] },
            { title: 'นำขยะรีไซเคิลไปจำหน่าย', component: __WEBPACK_IMPORTED_MODULE_6__pages_formula_1_formula_1__["a" /* Formula_1Page */] },
            { title: 'อนุรักษ์ป่าพื้นที่สีเขียวเดิม', component: __WEBPACK_IMPORTED_MODULE_7__pages_formula_2_formula_2__["a" /* Formula_2Page */] },
            { title: 'การปลูกต้นไม้ใหม่', component: __WEBPACK_IMPORTED_MODULE_8__pages_formula_3_formula_3__["a" /* Formula_3Page */] },
            { title: 'การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง', component: __WEBPACK_IMPORTED_MODULE_9__pages_formula_4_formula_4__["a" /* Formula_4Page */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\app\isnre2-android\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\app\isnre2-android\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






76;
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
    }
    //method signup รับพารามิเตอร 3 ตัว และคืนคา FeedBack กลับออกไป
    AuthServiceProvider.prototype.signup = function (name_user, lname_user, tel_user, prov_user, amp_user, tam_user, email_user, pass_user) {
        var myHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeader.append('Content-Type', 'application/json'); //กําหนด header
        //ประกาศตัวแปร data เพื่อเก็บขอมูลที่รับมา
        var data = {
            'name_user': name_user,
            'lname_user': lname_user,
            'tel_user': tel_user,
            'prov_user': prov_user,
            'amp_user': amp_user,
            'tam_user': tam_user,
            'email_user': email_user,
            'pass_user': pass_user
        };
        //ใช method post() สําหรับสง data เพื่อไปบันทึกขอมูล
        return this.http.post('http://localhost/isnre/php_app/insert.php', data, { headers: myHeader
        })
            .map(function (res) {
            var data = res.json(); //รับ json จาก Backend แลว return ออกไปใหเพจ
            return data;
        }).catch(this.handleError);
    };
    AuthServiceProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().errorMessage || 'Server เกิดขอผิดพลาด');
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formula_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formula_2_formula_2__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formula_3_formula_3__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Formula_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




var Formula_1Page = (function () {
    function Formula_1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Formula_1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Formula_1Page');
    };
    Formula_1Page.prototype.about1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    Formula_1Page.prototype.Formula2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__formula_2_formula_2__["a" /* Formula_2Page */]);
    };
    Formula_1Page.prototype.Formula3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__formula_3_formula_3__["a" /* Formula_3Page */]);
    };
    Formula_1Page.prototype.Formula4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__["a" /* Formula_4Page */]);
    };
    Formula_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formula-1',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\formula-1\formula-1.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>นำขยะรีไซเคิลไปจำหน่าย</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content no-padding>\n	<ion-fab right bottom>\n	    <button ion-fab color="danger"><ion-icon name="arrow-dropup"></ion-icon></button>\n	    <ion-fab-list side="top">\n	      <button ion-fab  (click)="about1()">การนำขยะไปแปรรูป</button>\n	      <button ion-fab>นำขยะรีไซเคิลไปจำหน่าย</button>\n	      <button ion-fab  (click)="Formula2()">อนุรักษ์ป่าพื้นที่สีเขียวเดิม</button>\n	      <button ion-fab  (click)="Formula3()">การปลูกต้นไม้ใหม่</button>\n	      <button ion-fab  (click)="Formula4()">การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</button>\n	    </ion-fab-list>\n	  </ion-fab>\n\n\n    <iframe src="http://119.59.125.189/isnre2/pages/formula_app2.php" frameborder="0" width="100%" height="100%"></iframe>\n\n\n\n\n\n	\n</ion-content>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\formula-1\formula-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Formula_1Page);
    return Formula_1Page;
}());

//# sourceMappingURL=formula-1.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formula_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formula_3_formula_3__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Formula_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




var Formula_2Page = (function () {
    function Formula_2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Formula_2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Formula_2Page');
    };
    Formula_2Page.prototype.about1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    Formula_2Page.prototype.Formula1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__["a" /* Formula_1Page */]);
    };
    Formula_2Page.prototype.Formula3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__formula_3_formula_3__["a" /* Formula_3Page */]);
    };
    Formula_2Page.prototype.Formula4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__["a" /* Formula_4Page */]);
    };
    Formula_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formula-2',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\formula-2\formula-2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>อนุรักษ์ป่าพื้นที่สีเขียวเดิม</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content no-padding>\n	<ion-fab right bottom>\n	    <button ion-fab color="danger"><ion-icon name="arrow-dropup"></ion-icon></button>\n	    <ion-fab-list side="top">\n	      <button ion-fab  (click)="about1()">การนำขยะไปแปรรูป</button>\n	      <button ion-fab  (click)="Formula1()">นำขยะรีไซเคิลไปจำหน่าย</button>\n	      <button ion-fab>อนุรักษ์ป่าพื้นที่สีเขียวเดิม</button>\n	      <button ion-fab  (click)="Formula3()">การปลูกต้นไม้ใหม่</button>\n	      <button ion-fab  (click)="Formula4()">การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</button>\n	    </ion-fab-list>\n	  </ion-fab>\n\n\n    <iframe src="http://119.59.125.189/isnre2/pages/formula_app3.php" frameborder="0" width="100%" height="100%"></iframe>\n\n\n\n\n\n	\n</ion-content>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\formula-2\formula-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Formula_2Page);
    return Formula_2Page;
}());

//# sourceMappingURL=formula-2.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formula_3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formula_2_formula_2__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Formula_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




var Formula_3Page = (function () {
    function Formula_3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Formula_3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Formula_3Page');
    };
    Formula_3Page.prototype.about1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    Formula_3Page.prototype.Formula1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__["a" /* Formula_1Page */]);
    };
    Formula_3Page.prototype.Formula2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__formula_2_formula_2__["a" /* Formula_2Page */]);
    };
    Formula_3Page.prototype.Formula4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__["a" /* Formula_4Page */]);
    };
    Formula_3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formula-3',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\formula-3\formula-3.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>การปลูกต้นไม้ใหม่</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content no-padding>\n	<ion-fab right bottom>\n	    <button ion-fab color="danger"><ion-icon name="arrow-dropup"></ion-icon></button>\n	    <ion-fab-list side="top">\n	      <button ion-fab  (click)="about1()">การนำขยะไปแปรรูป</button>\n	      <button ion-fab  (click)="Formula1()">นำขยะรีไซเคิลไปจำหน่าย</button>\n	      <button ion-fab  (click)="Formula2()">อนุรักษ์ป่าพื้นที่สีเขียวเดิม</button>\n	      <button ion-fab>การปลูกต้นไม้ใหม่</button>\n	      <button ion-fab  (click)="Formula4()">การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</button>\n	    </ion-fab-list>\n	  </ion-fab>\n\n\n    <iframe src="http://119.59.125.189/isnre2/pages/formula_app4.php" frameborder="0" width="100%" height="100%"></iframe>\n\n\n\n\n\n	\n</ion-content>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\formula-3\formula-3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Formula_3Page);
    return Formula_3Page;
}());

//# sourceMappingURL=formula-3.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formula_4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formula_2_formula_2__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formula_3_formula_3__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Formula_4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




var Formula_4Page = (function () {
    function Formula_4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Formula_4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Formula_4Page');
    };
    Formula_4Page.prototype.about1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    Formula_4Page.prototype.Formula1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__["a" /* Formula_1Page */]);
    };
    Formula_4Page.prototype.Formula2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__formula_2_formula_2__["a" /* Formula_2Page */]);
    };
    Formula_4Page.prototype.Formula3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__formula_3_formula_3__["a" /* Formula_3Page */]);
    };
    Formula_4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formula-4',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\formula-4\formula-4.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content no-padding>\n	<ion-fab right bottom>\n	    <button ion-fab color="danger"><ion-icon name="arrow-dropup"></ion-icon></button>\n	    <ion-fab-list side="top">\n	      <button ion-fab  (click)="about1()">การนำขยะไปแปรรูป</button>\n	      <button ion-fab  (click)="Formula1()">นำขยะรีไซเคิลไปจำหน่าย</button>\n	      <button ion-fab  (click)="Formula2()">อนุรักษ์ป่าพื้นที่สีเขียวเดิม</button>\n	      <button ion-fab  (click)="Formula3()">การปลูกต้นไม้ใหม่</button>\n	      <button ion-fab>การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</button>\n	    </ion-fab-list>\n	  </ion-fab>\n\n\n    <iframe src="http://119.59.125.189/isnre2/pages/formula_app5.php" frameborder="0" width="100%" height="100%"></iframe>\n\n\n\n\n\n	\n</ion-content>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\formula-4\formula-4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Formula_4Page);
    return Formula_4Page;
}());

//# sourceMappingURL=formula-4.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_measure_dist_leaflet_measure__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_measure_dist_leaflet_measure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet_measure_dist_leaflet_measure__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_location__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layer_layer__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__legend_legend__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MapPage = (function () {
    function MapPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.pro = navParams.get('pro');
        this.amp = navParams.get('amp');
        this.tam = navParams.get('tam');
        this.lyr = navParams.get('lyr');
        this.bbox = navParams.get('bbox');
        //console.log(this.pro + '-' + this.amp + '-' + this.tam + '-' + this.lyr);
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        // setTimeout(() => {   
        //   //loading.dismiss(); 
        // }, 1000);
    };
    MapPage.prototype.ionViewWillEnter = function () {
        //this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map('map', {
            center: [13.00, 101.50],
            zoom: 5,
            zoomControl: false,
        });
        this.map.fitBounds([
            [Number(this.bbox[1]), Number(this.bbox[2])],
            [Number(this.bbox[3]), Number(this.bbox[0])]
        ]);
        var osm = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attributions: 'OSM' });
        var mapbox = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
            '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
            'dDXD2lMJpTfCVsVuA')
            .addTo(this.map);
        var baseLayers = {
            "Mapbox": mapbox
        };
        if (typeof this.tam !== 'undefined') {
            this.loc = 'tamcode=' + this.tam;
        }
        else if (typeof this.amp !== 'undefined') {
            this.loc = 'ampcode=' + this.amp;
        }
        else {
            this.loc = 'procode=' + this.pro;
        }
        for (var j in this.lyr) {
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
                layers: this.lyr[j],
                format: 'image/png',
                transparent: true,
                CQL_FILTER: this.loc
            }).addTo(this.map);
        }
        //L.control.layers(baseLayers, overlays).addTo(this.map);
    };
    MapPage.prototype.addMeasure = function () {
        var options = { position: 'topright' };
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.control.measure(options).addTo(this.map);
        this.map.fitBounds([
            [40.712, -74.227],
            [40.774, -74.125]
        ]);
    };
    MapPage.prototype.gotoLocation = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__location_location__["a" /* LocationPage */], {});
    };
    MapPage.prototype.gotoLayer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__layer_layer__["a" /* LayerPage */], {
            pro: this.pro,
            amp: this.amp,
            tam: this.tam,
            lyr: this.lyr,
            bbox: this.bbox
        });
    };
    MapPage.prototype.gotoLegend = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__legend_legend__["a" /* LegendPage */], {
            lyr: this.lyr
        });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-map',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\map\map.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>map</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="danger"><ion-icon name="arrow-dropup"></ion-icon></button>\n\n        <ion-fab-list side="top">\n\n          <button ion-fab (click)="addMeasure()"><ion-icon name="git-pull-request"></ion-icon></button>\n\n          <button ion-fab (click)="gotoLocation()"><ion-icon name="search"></ion-icon></button>  \n\n          <button ion-fab (click)="gotoLayer()"><ion-icon name="albums"></ion-icon></button>          \n\n          <button ion-fab (click)="gotoLegend()"><ion-icon name="bowtie"></ion-icon></button>\n\n          <button ion-fab (click)="gotoLocation()"><ion-icon name="locate"></ion-icon></button>\n\n          <button ion-fab (click)="gotoLocation()"><ion-icon name="flag"></ion-icon></button>\n\n        </ion-fab-list>\n\n      </ion-fab>\n\n\n\n     \n\n\n\n  <div id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\map\map.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.initializePro();
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.initializePro = function () {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_prov.php')
            .subscribe(function (res) {
            _this.pros = res;
            //console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LocationPage.prototype.initializeAmp = function (provcode) {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_amp.php?procode=' + provcode)
            .subscribe(function (res) {
            _this.amps = res;
            //console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
        this.http.get('http://119.59.125.189/service/isnre_prov.php?procode=' + provcode)
            .subscribe(function (res) {
            _this.bbox = [res[0].xmin, res[0].ymin, res[0].xmax, res[0].ymax];
            //console.log(this.bbox);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LocationPage.prototype.initializeTam = function (ampcode) {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_tam.php?ampcode=' + ampcode)
            .subscribe(function (res) {
            _this.tams = res;
            //console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
        this.http.get('http://119.59.125.189/service/isnre_amp.php?ampcode=' + ampcode)
            .subscribe(function (res) {
            _this.bbox = [res[0].xmin, res[0].ymin, res[0].xmax, res[0].ymax];
            //console.log(this.bbox);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LocationPage.prototype.tamEtext = function (tamcode) {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_tam.php?tamcode=' + tamcode)
            .subscribe(function (res) {
            _this.bbox = [res[0].xmin, res[0].ymin, res[0].xmax, res[0].ymax];
            //console.log(this.bbox);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LocationPage.prototype.initializeLyr = function () {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_lyr.php')
            .subscribe(function (res) {
            _this.lyrs = res;
            //console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LocationPage.prototype.itemSelected = function (item) {
        this.dat = {
            pro: this.prov_ls,
            amp: this.amp_ls,
            tam: this.tam_ls,
            lyr: this.lyr_ls,
            bbox: this.bbox
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], this.dat);
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\location\location.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="isnre-font">\n    เลือกจังหวัด\n    <ion-list>\n        <ion-item>\n            <ion-label>จังหวัด</ion-label>\n            <ion-select [(ngModel)]="prov_ls" multiple="false" interface="action-sheet" (ngModelChange)="initializeAmp($event); initializeLyr($event)">\n                <ion-option *ngFor="let pro of pros" [value] = "pro.procode" >{{pro.prov_namt}}</ion-option>\n            </ion-select>\n          </ion-item>\n      </ion-list>\n      \n    เลือกอำเภอ\n\n    <ion-list>\n        <ion-item>\n            <ion-label>อำเภอ</ion-label>\n            <ion-select [(ngModel)]="amp_ls" multiple="false" interface="action-sheet" (ngModelChange)="initializeTam($event)">\n                <ion-option *ngFor="let amp of amps" [value] = "amp.ampcode">{{amp.amp_namt}}</ion-option>\n            </ion-select>\n          </ion-item>\n      </ion-list>\n\n    เลือกตำบล\n\n    <ion-list>\n        <ion-item>\n            <ion-label>ตำบล</ion-label>\n            <ion-select [(ngModel)]="tam_ls" multiple="false" interface="action-sheet" (ngModelChange)="tamEtext($event); ">\n                <ion-option *ngFor="let tam of tams" [value] = "tam.tamcode">{{tam.tam_namt}}</ion-option>\n            </ion-select>\n          </ion-item>\n      </ion-list>\n\n    เลือกชั้นข้อมูล\n\n    <ion-list>\n        <ion-item>\n            <ion-label>ชั้นข้อมูล</ion-label>\n            <ion-select [(ngModel)]="lyr_ls" multiple="true" interface="action-sheet">\n                <ion-option *ngFor="let lyr of lyrs" [value] = "lyr.lyr">{{lyr.lyr_desc}}</ion-option>\n            </ion-select>\n          </ion-item>\n      </ion-list>\n\n      <button ion-button (click)="itemSelected()">แสดงแผนที่</button>\n\n  </ion-content>\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\location\location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(fb, navCtrl, loadingCtrl, http) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.email_user = fb.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.pass_user = fb.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required);
        this.reportForm = fb.group({
            'email_user': this.email_user,
            'pass_user': this.pass_user
        });
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage.prototype.submit = function () {
        var loader = this.loadingCtrl.create({ content: "กำลังเข้าสู่ระบบ.." });
        var email_user = this.reportForm.controls['email_user'].value;
        var pass_user = this.reportForm.controls['pass_user'].value;
        var data = JSON.stringify({
            'email_user': email_user,
            'pass_user': pass_user
        });
        loader.present();
        this.http.post('http://119.59.125.189/isnre2/php_app/checklogin.php', data)
            .subscribe(function (res) {
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
        }, function (error) {
            console.log("Oooops!");
            loader.dismiss();
        });
    };
    WelcomePage.prototype.gotoindex = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding id="welcome" default-background  id="isnre-font">\n\n	<br>\n\n	<h1 text-center><img  class="marginTop" src="../../assets/imgs/logo2.png" alt="" width="80%"></h1>\n\n	<br>\n\n	\n\n<form novalidate [formGroup]="reportForm" >\n\n	<div class="form">\n\n		<ion-list>\n\n		  <ion-item>\n\n		    <ion-input type="email" formControlName="email_user" placeholder="Username" required></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-input type="password" formControlName="pass_user" placeholder="Password" required></ion-input>\n\n		  </ion-item>\n\n\n\n		</ion-list> <!-- [disabled]="!reportForm.valid" -->\n\n		<button ion-button block color="light"  type="submit"  (click)="gotoindex()">เข้าสู่ระบบ</button>\n\n		<button ion-button block class="marginTop" (click)="signup()">สมัครสมาชิก</button>\n\n	</div>\n\n</form>	\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map