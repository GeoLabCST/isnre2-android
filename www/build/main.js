webpackJsonp([11],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>About</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content padding>\n\n  <h3>About</h3>\n\n</ion-content>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmphoePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tambon_tambon__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layers_layers__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AmphoePage = (function () {
    function AmphoePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.prov = navParams.get('dat');
        this.initializeItems(this.prov.prov_code);
    }
    AmphoePage.prototype.initializeItems = function (provcode) {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_amp.php?prov_code=' + provcode)
            .subscribe(function (res) {
            _this.items = res;
            console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    AmphoePage.prototype.allSelected = function (item) {
        //console.log("Selected Item", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__layers_layers__["a" /* LayersPage */], {
            dat: this.prov
        });
    };
    AmphoePage.prototype.itemSelected = function (item) {
        //console.log("Selected Item", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tambon_tambon__["a" /* TambonPage */], {
            dat: item
        });
    };
    AmphoePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-amphoe',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\amphoe\amphoe.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>amphoe</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="isnre-font">\n\n    เลือกอำเภอ\n\n      <ion-item-group>\n\n          <ion-list>\n\n              <button ion-item (click)="allSelected(item)">\n\n                เลือกทุกอำเภอ\n\n              </button>\n\n            </ion-list>\n\n        <ion-list>\n\n          <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n\n            {{ item.amp_namt }}\n\n          </button>\n\n        </ion-list>\n\n      </ion-item-group>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\amphoe\amphoe.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AmphoePage);
    return AmphoePage;
}());

//# sourceMappingURL=amphoe.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TambonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layers_layers__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TambonPage = (function () {
    function TambonPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.amp = navParams.get('dat');
        this.initializeItems(this.amp.ampcode);
    }
    TambonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TambonPage');
    };
    TambonPage.prototype.initializeItems = function (ampcode) {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_tam.php?amp_code=' + ampcode)
            .subscribe(function (res) {
            _this.items = res;
            console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    TambonPage.prototype.allSelected = function (item) {
        //console.log("Selected Item", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__layers_layers__["a" /* LayersPage */], {
            dat: this.amp
        });
    };
    TambonPage.prototype.itemSelected = function (item) {
        //console.log("Selected Item", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__layers_layers__["a" /* LayersPage */], {
            dat: item
        });
    };
    TambonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tambon',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\tambon\tambon.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>tambon</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="isnre-font">\n\n    เลือกตำบล\n\n      <ion-item-group>\n\n          <ion-list>\n\n              <button ion-item (click)="allSelected(item)">\n\n                เลือกทุกตำบล\n\n              </button>\n\n            </ion-list>\n\n        <ion-list>\n\n          <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n\n            {{ item.tam_namt }}\n\n          </button>\n\n        </ion-list>\n\n      </ion-item-group>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\tambon\tambon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], TambonPage);
    return TambonPage;
}());

//# sourceMappingURL=tambon.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(55);
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
        this.http.get('http://119.59.125.189/service/isnre_amp.php?prov_code=' + provcode)
            .subscribe(function (res) {
            _this.amps = res;
            //console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LocationPage.prototype.initializeTam = function (ampcode) {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_tam.php?amp_code=' + ampcode)
            .subscribe(function (res) {
            _this.tams = res;
            //console.log(res);
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
            lyr: this.lyr_ls
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], this.dat);
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\location\location.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="isnre-font">\n\n    เลือกจังหวัด\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>จังหวัด</ion-label>\n\n            <ion-select [(ngModel)]="prov_ls" multiple="false" interface="action-sheet" (ngModelChange)="initializeAmp($event); initializeLyr($event)">\n\n                <ion-option *ngFor="let pro of pros" [value] = "pro.prov_code" >{{pro.prov_namt}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n      </ion-list>\n\n      \n\n    เลือกอำเภอ\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>อำเภอ</ion-label>\n\n            <ion-select [(ngModel)]="amp_ls" multiple="false" interface="action-sheet" (ngModelChange)="initializeTam($event)">\n\n                <ion-option *ngFor="let amp of amps" [value] = "amp.ampcode">{{amp.amp_namt}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n      </ion-list>\n\n\n\n    เลือกตำบล\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>ตำบล</ion-label>\n\n            <ion-select [(ngModel)]="tam_ls" multiple="false" interface="action-sheet" (ngModelChange)="initializeLyr($event)">\n\n                <ion-option *ngFor="let tam of tams" [value] = "tam.tamcode">{{tam.tam_namt}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n      </ion-list>\n\n\n\n    เลือกชั้นข้อมูล\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>ชั้นข้อมูล</ion-label>\n\n            <ion-select [(ngModel)]="lyr_ls" multiple="true" interface="action-sheet">\n\n                <ion-option *ngFor="let lyr of lyrs" [value] = "lyr.lyr">{{lyr.lyr_desc}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n      </ion-list>\n\n\n\n      <button ion-button (click)="itemSelected()">แสดงแผนที่</button>\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\location\location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
        this.reportForm = fb.group({
            'name_user': this.name_user,
            'lname_user': this.lname_user,
            'tel_user': this.tel_user,
            'prov_user': this.prov_user,
            'amp_user': this.amp_user,
            'tam_user': this.tam_user,
            'email_user': this.email_user,
            'pass_user': this.pass_user
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
            'img64': img64
        });
        loader.present();
        this.http.post('http://localhost/isnre/php_app/insert.php', data)
            .subscribe(function (res) {
            if (res.message == 'error-email') {
                loader.dismiss();
                _this.gotoHome();
                var alert = _this.alertCtrl.create({
                    title: 'ไม่สามารถบันทึกได้!',
                    subTitle: 'E-Mail ของท่านเคยมีการสมัครสมาชิกแล้ว กรุณาเข้าสู่ระบบ',
                    buttons: ['ok']
                });
                alert.present();
            }
            else if (res.message == 'success') {
                loader.dismiss();
                _this.gotoHome();
                var alert = _this.alertCtrl.create({
                    title: 'ลงทะเบียนเสร็จสิ้น',
                    subTitle: 'ท่านสามารถ Log in เข้าใช้งานระบบได้ทันที',
                    buttons: ['ok']
                });
                alert.present();
            }
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
            selector: 'page-register',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\register\register.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>REGISTER</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<!-- Themes Register + logo -->\n\n<ion-content  background-size default-background  id="isnre-font">\n\n        <ion-row wrap padding>\n\n            <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <!--Form-->\n\n                  <form novalidate [formGroup]="reportForm" >\n\n                <div class="form">\n\n                    <!--Form Title-->\n\n                    <h1 title text-right>สมัครสมาชิกใหม่</h1>\n\n                    <!---Input field username-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>ชื่อ</ion-label>\n\n                        <ion-input required type="text" formControlName="name_user" ></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field password-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>นามสกุล</ion-label>\n\n                        <ion-input required type="text" formControlName="lname_user"></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field country-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>เบอร์โทรศัพท์</ion-label>\n\n                        <ion-input required type="number" formControlName="tel_user"   ></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field city-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>จังหวัด</ion-label>\n\n                        <ion-input required type="text" formControlName="prov_user" ></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>อำเภอ</ion-label>\n\n                        <ion-input required type="text" formControlName="amp_user" ></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>ตำบล</ion-label>\n\n                        <ion-input required type="text" formControlName="tam_user" ></ion-input>\n\n                    </ion-item>\n\n\n\n                 \n\n\n\n                    <!---Input field email-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>email <small>*ใช้ในการเข้าสู่ระบบ</small></ion-label>\n\n                        <ion-input required type="email" formControlName="email_user" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" ></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>รหัสผ่าน <small>*ใช้ในการเข้าสู่ระบบ</small></ion-label>\n\n                        <ion-input required type="password" formControlName="pass_user"  ></ion-input>\n\n                    </ion-item>\n\n\n\n                    <!-- <ion-list radio-group>\n\n                      <ion-list-header>\n\n                        <h2>เลือกระดับผู้ใช้งาน</h2>\n\n                      </ion-list-header>\n\n\n\n                      <ion-item no-padding>\n\n                        <ion-label ><small>ระดับปฏิบัติการ</small></ion-label>\n\n                        <ion-radio checked="true" value="operational" formControlName="level_user1"></ion-radio>\n\n                      </ion-item>\n\n\n\n                      <ion-item no-padding>\n\n                        <ion-label ><small>ระดับวิเคราะห์</small></ion-label>\n\n                        <ion-radio value="analytical" formControlName="level_user2"></ion-radio>\n\n                      </ion-item>\n\n\n\n                      <ion-item no-padding>\n\n                        <ion-label ><small>ระดับบริหาร</small> </ion-label>\n\n                        <ion-radio value="executive"  formControlName="level_user3"></ion-radio>\n\n                      </ion-item>\n\n                    </ion-list> -->\n\n                       <button ion-button block icon-left (click)="takePicture()">\n\n                          <ion-icon ios="ios-camera" md="md-camera"></ion-icon> ถ่ายภาพ\n\n                        </button>\n\n                        <ion-card>\n\n                          <img [src]="imageURI" *ngIf="imageURI" />\n\n                        </ion-card>\n\n                     <hr>\n\n\n\n                    <!---Register button-->\n\n                     <button ion-button block type="submit" [disabled]="!reportForm.valid" (click)="submit()">สร้างบัญชีใหม่</button>\n\n                </div>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _j || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(171);
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
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding id="welcome" default-background  id="isnre-font">\n\n	<br><br>\n\n	<h1 text-center><img  class="marginTop" src="../../assets/imgs/logo2.png" alt="" width="80%"></h1>\n\n	<br>\n\n	<ion-list>\n\n\n\n	  <ion-item>\n\n	    <ion-input type="text" placeholder="Username"></ion-input>\n\n	  </ion-item>\n\n\n\n	  <ion-item>\n\n	    <ion-input type="password" placeholder="Password"></ion-input>\n\n	  </ion-item>\n\n\n\n	</ion-list>\n\n	<button ion-button block color="light"  (click)="login()">เข้าสู่ระบบ</button>\n\n	<button ion-button block class="marginTop" (click)="signup()">สมัครสมาชิก</button>\n\n	\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

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
		299,
		10
	],
	"../pages/amphoe/amphoe.module": [
		300,
		9
	],
	"../pages/contact/contact.module": [
		301,
		8
	],
	"../pages/layers/layers.module": [
		302,
		7
	],
	"../pages/location/location.module": [
		303,
		6
	],
	"../pages/login/login.module": [
		304,
		5
	],
	"../pages/map/map.module": [
		305,
		4
	],
	"../pages/other/other.module": [
		306,
		3
	],
	"../pages/register/register.module": [
		307,
		2
	],
	"../pages/tambon/tambon.module": [
		308,
		1
	],
	"../pages/welcome/welcome.module": [
		309,
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__amphoe_amphoe__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layers_layers__ = __webpack_require__(42);
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
        this.initializeItems();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //this.loadMap();  
    };
    HomePage.prototype.initializeItems = function () {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_prov.php')
            .subscribe(function (res) {
            _this.items = res;
            console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    HomePage.prototype.allSelected = function (item) {
        //console.log("Selected Item", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__layers_layers__["a" /* LayersPage */], {
            dat: 'all'
        });
    };
    HomePage.prototype.itemSelected = function (item) {
        //console.log("Selected Item", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__amphoe_amphoe__["a" /* AmphoePage */], {
            dat: item
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="isnre-font">\n\n  เลือกจังหวัด\n\n    <ion-item-group>\n\n        <ion-list>\n\n            <button ion-item (click)="allSelected(\'all\')">\n\n              เลือกทุกจังหวัด\n\n            </button>\n\n          </ion-list>\n\n      <ion-list>\n\n        <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n\n          {{ item.prov_namt }}\n\n        </button>\n\n      </ion-list>\n\n    </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    //tab4Root: any = LocationPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\tabs\tabs.html"*/'<ion-tabs id="isnre-font">\n\n  <ion-tab [root]="tab1Root" tabTitle="แผนที่" tabIcon="map"></ion-tab>\n\n  <!-- <ion-tab [root]="tab4Root" tabTitle="แผนที่2" tabIcon="map"></ion-tab> -->\n\n  <ion-tab [root]="tab2Root" tabTitle="คำนวนคาร์บอน" tabIcon="calculator"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="ตั้งค่า" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\app\isnre2-android\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_other_other__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_amphoe_amphoe__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tambon_tambon__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_layers_layers__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_location_location__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_map_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__ = __webpack_require__(292);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_amphoe_amphoe__["a" /* AmphoePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tambon_tambon__["a" /* TambonPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_layers_layers__["a" /* LayersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_map_map__["a" /* MapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/amphoe/amphoe.module#AmphoePageModule', name: 'AmphoePage', segment: 'amphoe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layers/layers.module#LayersPageModule', name: 'LayersPage', segment: 'layers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tambon/tambon.module#TambonPageModule', name: 'TambonPage', segment: 'tambon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_amphoe_amphoe__["a" /* AmphoePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tambon_tambon__["a" /* TambonPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_layers_layers__["a" /* LayersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_map_map__["a" /* MapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_other_other__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(111);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Tabs Page', component: __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */] },
            { title: 'Other Page', component: __WEBPACK_IMPORTED_MODULE_4__pages_other_other__["a" /* OtherPage */] }
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(298);
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

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayersPage = (function () {
    function LayersPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.tam = navParams.get('dat');
        this.initializeItems(this.tam.tamcode);
    }
    LayersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LayersPage');
    };
    LayersPage.prototype.initializeItems = function (ampcode) {
        this.http.get('http://119.59.125.189/service/isnre_lyr.php')
            .subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LayersPage.prototype.itemSelected = function (item) {
        //console.log("Selected Item", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], {
            lyr: item,
            dat: this.navParams.get('dat')
        });
    };
    LayersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-layers',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\layers\layers.html"*/'<!--\n\n  Generated template for the LayersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>layers</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="isnre-font">\n\n    เลือกชั้นข้อมูล\n\n      <!-- <ion-item-group>\n\n        <ion-list>\n\n          <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n\n            {{ item.lyr_desc }}\n\n          </button>\n\n        </ion-list>\n\n      </ion-item-group> -->\n\n      <ion-item>\n\n          <ion-label>Music</ion-label>\n\n          <ion-select [(ngModel)]="lyrs" multiple="true">\n\n              <ion-option *ngFor="let item of items" [value] = "item.lyr">{{item.lyr_desc}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\layers\layers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LayersPage);
    return LayersPage;
}());

//# sourceMappingURL=layers.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
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
        //this.prov = navParams.get('lyr');
        this.pro = navParams.get('pro');
        this.amp = navParams.get('amp');
        this.tam = navParams.get('tam');
        this.lyr = navParams.get('lyr');
        console.log(this.pro + '-' + this.amp + '-' + this.tam + '-' + this.lyr);
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map('map', {
            center: [13.00, 101.50],
            zoom: 5,
            zoomControl: false
        });
        var osm = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attributions: 'OSM' });
        var mapbox = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access' +
            '_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzs' +
            'dDXD2lMJpTfCVsVuA')
            .addTo(this.map);
        var baseLayers = {
            "Mapbox": mapbox
        };
        var overlays = {};
        var url = "http://119.59.125.189/geoserver/ows?";
        var l;
        for (var j in this.lyr) {
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer.wms(url, {
                layers: this.lyr[j],
                format: 'image/png',
                transparent: true,
                CQL_FILTER: 'prov_code=' + this.pro
            }).addTo(this.map);
        }
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.control.layers(baseLayers, overlays).addTo(this.map);
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-map',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\map\map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>map</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-fab left bottom>\n\n        <button ion-fab color="danger"><ion-icon name="arrow-dropup"></ion-icon></button>\n\n        <ion-fab-list side="top">\n\n          <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n          <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n          <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n          <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n        </ion-fab-list>\n\n      </ion-fab>\n\n\n\n\n\n  <div id="map"></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\map\map.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map