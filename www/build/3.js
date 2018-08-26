webpackJsonp([3],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPageModule", function() { return ForgetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgetPageModule = (function () {
    function ForgetPageModule() {
    }
    ForgetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forget__["a" /* ForgetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forget__["a" /* ForgetPage */]),
            ],
        })
    ], ForgetPageModule);
    return ForgetPageModule;
}());

//# sourceMappingURL=forget.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
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


var ForgetPage = (function () {
    function ForgetPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ForgetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPage');
    };
    ForgetPage.prototype.closeForgot = function () {
        this.viewCtrl.dismiss();
    };
    ForgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\forget\forget.html"*/'<ion-content padding default-background id="isnre-font">\n\n    <p></p>\n\n    <p></p>\n\n    <p></p>\n\n    <p></p>\n\n    หากคุณลืมรหัสผ่านสามารถทำได้ดังนี้<p></p>\n\n    โปรดติดต่อผู้ดูแลระบบ<p></p>\n\n    ชื่อ: นายชาณวุฒิ แดงอร่าม ตำแหน่งเจ้าหน้าที่วิเคราะห์นโยบายและแผน<p></p>\n\n    Email: budget_ee@hotmail.com<p></p>\n\n    Tel.: 098-2643999<p></p>\n\n    คุณต้องทำอย่างไรต่อไป<p></p>\n\n    หลังจากคุณได้รับรหัสผ่านของคุณจากผู้ดูแลระบบแล้ว เราจะขอให้คุณลงชื่อเข้าด้วยรหัสผ่านใหม่ของคุณ ในครั้งต่อไปที่คุณเข้าใช้ระบบ ISNRE2 ของคุณ หากต้องการคุณสามารถอัพเดทที่อยู่อีเมลหรือเปลี่ยนรหัสผ่านของคุณได้\n\n    <p></p>\n\n    <div>\n\n      <button ion-button (click)="closeForgot()">กลับหน้า login</button>\n\n    </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\forget\forget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ForgetPage);
    return ForgetPage;
}());

//# sourceMappingURL=forget.js.map

/***/ })

});
//# sourceMappingURL=3.js.map