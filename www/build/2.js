webpackJsonp([2],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoPageModule = (function () {
    function InfoPageModule() {
    }
    InfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */]),
            ],
        })
    ], InfoPageModule);
    return InfoPageModule;
}());

//# sourceMappingURL=info.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoPage = (function () {
    function InfoPage(http, navParams, viewCtrl) {
        this.http = http;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.items = [];
        this.lat = navParams.get('lat');
        this.lng = navParams.get('lng');
        this.alreadyLyr = navParams.get('alreadyLyr');
        this.alreadyTh = navParams.get('alreadyTh');
        //console.log(this.info);
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad InfoPage');
        this.getInfo();
    };
    InfoPage.prototype.getInfo = function () {
        var _this = this;
        var _loop_1 = function (l) {
            console.log(this_1.alreadyLyr[l]);
            console.log(this_1.alreadyTh[l]);
            var lyrName = {
                "lyr": this_1.alreadyTh[l]
            };
            this_1.http.get('http://119.59.125.189/service/isnre_getfeatureinfo.php?lat=' + this_1.lat + '&lon=' + this_1.lng + '&lyr=' + this_1.alreadyLyr[l])
                .subscribe(function (res) {
                setTimeout(function () {
                    var lyrVal = res[0];
                    var lyrDat = Object.assign(lyrName, lyrVal);
                    _this.items.push(lyrDat);
                    console.log(_this.items);
                }, 1000);
            }, function (error) {
                console.log("Oooops!");
            });
        };
        var this_1 = this;
        for (var l in this.alreadyLyr) {
            _loop_1(l);
        }
    };
    InfoPage.prototype.closeLegend = function () {
        this.viewCtrl.dismiss();
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\info\info.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      <h3>{{item.lyr}}:</h3>\n      <p>{{item.desc}}</p>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button (click)="closeLegend()">กลับหน้าแผนที่</button>\n</ion-content>\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ })

});
//# sourceMappingURL=2.js.map