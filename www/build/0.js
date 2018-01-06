webpackJsonp([0],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendPageModule", function() { return LegendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__legend__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LegendPageModule = (function () {
    function LegendPageModule() {
    }
    LegendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__legend__["a" /* LegendPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__legend__["a" /* LegendPage */]),
            ],
        })
    ], LegendPageModule);
    return LegendPageModule;
}());

//# sourceMappingURL=legend.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendPage; });
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


var LegendPage = (function () {
    function LegendPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alreadyLyr = navParams.get('alreadyLyr');
        this.alreadyTh = navParams.get('alreadyTh');
        //this.lyr_ls = navParams.get('lyr_ls');
    }
    LegendPage.prototype.ionViewDidLoad = function () {
        //console.log(this.lyr_ls);
        this.loadLyr();
    };
    LegendPage.prototype.loadLyr = function () {
        var obj = [];
        var i = 0;
        console.log(this.alreadyTh);
        for (var a in this.alreadyLyr) {
            obj[a] = {
                lyr: this.alreadyLyr[i],
                lyr_th: this.alreadyTh[i]
            };
            i++;
        }
        this.lyr_ls = obj;
        //console.log(obj);
    };
    LegendPage.prototype.closeLegend = function () {
        this.viewCtrl.dismiss();
    };
    LegendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-legend',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\legend\legend.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>legend</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="isnre-font">\n  <ion-item *ngFor="let l of lyr_ls"><p>{{l.lyr_th}}</p>\n      <img [src]="\'http://119.59.125.189/geoserver/wms?Service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=25&HEIGHT=25&LAYER=isnre:\' + l.lyr">\n  </ion-item>\n  <button ion-button (click)="closeLegend()">กลับหน้าแผนที่</button>\n</ion-content>\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\legend\legend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], LegendPage);
    return LegendPage;
}());

//# sourceMappingURL=legend.js.map

/***/ })

});
//# sourceMappingURL=0.js.map