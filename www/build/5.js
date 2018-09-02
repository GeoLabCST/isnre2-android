webpackJsonp([5],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDataPageModule", function() { return AddDataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_data__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddDataPageModule = (function () {
    function AddDataPageModule() {
    }
    AddDataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_data__["a" /* AddDataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_data__["a" /* AddDataPage */]),
            ],
        })
    ], AddDataPageModule);
    return AddDataPageModule;
}());

//# sourceMappingURL=add-data.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_share__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddDataPage = (function () {
    function AddDataPage(transfer, fb, camera, navParams, loadingCtrl, alertCtrl, toastCtrl, view, http, shareService) {
        this.transfer = transfer;
        this.fb = fb;
        this.camera = camera;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.view = view;
        this.http = http;
        this.shareService = shareService;
        this.pos = navParams.get('pos');
        this.title = fb.control('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required);
        this.descpt = fb.control('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required);
        this.usrData = this.shareService.getUserData();
        //this.fname = fb.control('', Validators.required);
        this.reportForm = fb.group({
            'title': this.title,
            'descpt': this.descpt,
        });
    }
    AddDataPage.prototype.ionViewDidLoad = function () {
        // Receiving data via Service
        //this.usrData = this.shareService.getUserData();
        //console.log(this.usrData);
        //console.log(this.pos.lng);
    };
    AddDataPage.prototype.takePicture = function () {
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
    AddDataPage.prototype.submit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "กำลังบันทึกข้อมูล.." });
        var title = this.reportForm.controls['title'].value;
        var descpt = this.reportForm.controls['descpt'].value;
        var lat = this.pos.lat;
        var lon = this.pos.lng;
        var img64 = this.imageFileName;
        var usrId = this.usrData.id_user;
        var usrEmail = this.usrData.email_user;
        var data = JSON.stringify({
            'lat': lat,
            'lon': lon,
            'title': title,
            'descpt': descpt,
            'usrId': usrId,
            'usrEmail': usrEmail,
            'img64': img64
        });
        loader.present();
        this.http.post('http://119.59.125.189/service/isnre_report.php', data)
            .subscribe(function (res) {
            loader.dismiss();
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
        fileTransfer.upload(this.imageURI, 'http://119.59.125.189/service/isnre_upload.php', options)
            .then(function (res) {
            loader.dismiss();
            _this.closeModal();
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
    AddDataPage.prototype.presentToast = function (msg) {
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
    AddDataPage.prototype.closeModal = function () {
        this.view.dismiss();
        //this.navCtrl.setRoot(MapPage, this.dat)
    };
    AddDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-data',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\add-data\add-data.html"*/'<ion-header id="isnre-font">\n\n  <ion-navbar> \n\n    <ion-title>เพิ่มข้อมูล</ion-title>    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="isnre-font">\n\n \n\n    <form novalidate [formGroup]="reportForm" >\n\n        <ion-list>\n\n    \n\n          <ion-item>\n\n            <ion-label color="primary" stacked>ตำแหน่ง</ion-label>\n\n            <ion-input type="text" placeholder="lat: {{pos.lat}} long: {{pos.lng}}" readonly></ion-input>\n\n          </ion-item>\n\n    \n\n          <ion-item>\n\n            <ion-label color="primary" stacked>สถานที่</ion-label>\n\n            <ion-input type="text" formControlName="title" placeholder="กรอกชื่อสถานที่"></ion-input>\n\n          </ion-item>\n\n    \n\n          <ion-item>\n\n            <ion-label color="primary" stacked>รายละเอียด</ion-label>\n\n            <ion-input type="text" formControlName="descpt" placeholder="กรอกรายละเอียดเกี่ยวกับสถานที่"></ion-input>\n\n          </ion-item>\n\n    \n\n          <!-- <ion-item>\n\n            <ion-label color="primary" stacked>ชื่อ-นามสกุล</ion-label>\n\n            <ion-input type="email" formControlName="fname" placeholder="กรอกชื่อผู้รายงาน"></ion-input>\n\n          </ion-item> -->\n\n    \n\n        </ion-list>\n\n    \n\n       \n\n        <ion-card>\n\n          <img [src]="imageURI" *ngIf="imageURI" />\n\n        </ion-card>   \n\n        <button ion-button color="danger" round icon-left (click)="takePicture()">\n\n            <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n\n          </button>   \n\n        <p></p> \n\n        <button ion-button type="submit" [disabled]="!reportForm.valid" (click)="submit()">ส่งข้อมูล</button>\n\n        <button ion-button color="light" type="submit" [disabled]="!reportForm.valid" (click)="closeModal()">ยกเลิก</button>\n\n      </form>\n\n    <!-- <button ion-button (click)="closeModal()">แสดงแผนที่</button> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\add-data\add-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__providers_service_share__["a" /* ShareService */]])
    ], AddDataPage);
    return AddDataPage;
}());

//# sourceMappingURL=add-data.js.map

/***/ })

});
//# sourceMappingURL=5.js.map