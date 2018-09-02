webpackJsonp([4],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferPageModule", function() { return BufferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buffer__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BufferPageModule = (function () {
    function BufferPageModule() {
    }
    BufferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buffer__["a" /* BufferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buffer__["a" /* BufferPage */]),
            ],
        })
    ], BufferPageModule);
    return BufferPageModule;
}());

//# sourceMappingURL=buffer.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BufferPage; });
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


var BufferPage = (function () {
    function BufferPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.lyr_ls = [];
        this.lyr_th = [];
        this.alreadyLyr = navParams.get('alreadyLyr');
        this.alreadyTh = navParams.get('alreadyTh');
        this.initLyr();
    }
    BufferPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LayerPage');
    };
    BufferPage.prototype.initLyr = function () {
        this.lyrs = [
            {
                "id": "65",
                "lyr": "c29_nrf_buf3km",
                "lyr_desc": "พื้นที่กันชน 3 ก.ม. จากพื้นที่ป่าสงวน ",
                "checked": []
            },
            {
                "id": "66",
                "lyr": "c29_nrf_buf5km",
                "lyr_desc": "พื้นที่กันชน 5 ก.ม. จากพื้นที่ป่าสงวน ",
                "checked": []
            },
            {
                "id": "67",
                "lyr": "c29_nrf_buf10km",
                "lyr_desc": "พื้นที่กันชน 10 ก.ม. จากพื้นที่ป่าสงวน ",
                "checked": []
            }
        ];
        for (var l in this.lyrs) {
            for (var a in this.alreadyLyr) {
                if (this.lyrs[l].lyr == this.alreadyLyr[a]) {
                    this.lyrs[l]['checked'].push(1);
                }
            }
        }
        this.initLyrArr();
    };
    BufferPage.prototype.initLyrArr = function () {
        //load alreadyLyr to array
        for (var l in this.alreadyLyr) {
            this.lyr_ls.push(this.alreadyLyr[l]);
        }
        //load lyr_ls to array
        for (var t in this.alreadyTh) {
            this.lyr_th.push(this.alreadyTh[t]);
        }
    };
    BufferPage.prototype.onChange = function (lyr, lyr_th, isChecked, index) {
        if (isChecked) {
            this.lyr_ls.push(lyr);
            this.lyr_th.push(lyr_th);
        }
        else {
            this.lyr_ls.splice(this.lyr_ls.indexOf(lyr), 1);
            this.lyr_th.splice(this.lyr_th.indexOf(lyr_th), 1);
        }
        //console.log(this.lyr_ls);
    };
    BufferPage.prototype.lyrSelected = function () {
        var data = {
            lyr_ls: this.lyr_ls,
            lyr_th: this.lyr_th
        };
        this.viewCtrl.dismiss(data);
    };
    BufferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buffer',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\buffer\buffer.html"*/'<ion-header id="isnre-font">\n\n  <ion-navbar>\n    <ion-title>พื้นที่กันชน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="isnre-font">\n  <h4>การกำหนดขอบเขตพื้นที่กันชน (buffer)</h4>\n  <ion-scroll scrollX="true" scrollY="true" class="data">\n    <ion-list>\n      <ion-item *ngFor="let lyr of lyrs; let i = index">\n        <ion-label>{{lyr.lyr_desc}}</ion-label>\n        <ion-checkbox [(ngModel)]="lyr.checked[0]" (ionChange)="onChange(lyr.lyr,lyr.lyr_desc,$event.checked, i)" value="lyr.lyr"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n  </ion-scroll>\n  <p></p>\n  <div padding>\n    <button ion-button (click)="lyrSelected()">กลับหน้าแผนที่</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\buffer\buffer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BufferPage);
    return BufferPage;
}());

//# sourceMappingURL=buffer.js.map

/***/ })

});
//# sourceMappingURL=4.js.map