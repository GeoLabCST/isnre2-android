webpackJsonp([1],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerPageModule", function() { return LayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LayerPageModule = (function () {
    function LayerPageModule() {
    }
    LayerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__layer__["a" /* LayerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__layer__["a" /* LayerPage */]),
            ],
        })
    ], LayerPageModule);
    return LayerPageModule;
}());

//# sourceMappingURL=layer.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
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
    function LayerPage(navCtrl, viewCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.http = http;
        //public lyr: any;  
        this.lyr_ls = [];
        this.lyr_th = [];
        this.alreadyLyr = navParams.get('alreadyLyr');
        this.alreadyTh = navParams.get('alreadyTh');
        this.initLyr();
        //this.lyr_old = navParams.get('lyr')
    }
    LayerPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LayerPage');
    };
    LayerPage.prototype.initLyr = function () {
        // this.http.get('http://119.59.125.189/service/isnre_lyr.php')
        // .subscribe(res => {
        //   this.lyrs = res;
        //   //console.log(res);
        // }, error => {
        //   console.log("Oooops!");
        // });    
        this.lyrs = [{
                "id": "1",
                "lyr": "c01_region",
                "lyr_desc": "เขตภาค ",
                "checked": []
            },
            {
                "id": "2",
                "lyr": "c02_province",
                "lyr_desc": "เขตจังหวัด ",
                "checked": []
            },
            {
                "id": "3",
                "lyr": "c03_district",
                "lyr_desc": "เขตอำเภอ ",
                "checked": []
            },
            {
                "id": "4",
                "lyr": "c04_subdistrict",
                "lyr_desc": "เขตตำบล ",
                "checked": []
            },
            {
                "id": "5",
                "lyr": "c05_municipa",
                "lyr_desc": "เขตเทศบาล ",
                "checked": []
            },
            {
                "id": "6",
                "lyr": "c06_village",
                "lyr_desc": "ตำแหน่งหมู่บ้าน ",
                "checked": []
            },
            {
                "id": "7",
                "lyr": "c07_ngo_prj",
                "lyr_desc": "ที่ตั้งโครงการ (NGO) ",
                "checked": []
            },
            {
                "id": "8",
                "lyr": "c08_eia_prj",
                "lyr_desc": "พื้นที่ตั้งโครงการ (EIA) ",
                "checked": []
            },
            {
                "id": "9",
                "lyr": "c09_urb_plan",
                "lyr_desc": "ผังเมือง ",
                "checked": []
            },
            {
                "id": "10",
                "lyr": "c10_pc_zone",
                "lyr_desc": "เขตควบคุมมลพิษ",
                "checked": []
            },
            {
                "id": "11",
                "lyr": "c11_weather",
                "lyr_desc": "จุดตรวจวัดทางอุตุนิยมวิทยา ",
                "checked": []
            },
            {
                "id": "12",
                "lyr": "c12_noise",
                "lyr_desc": "จุดตรวจวัดเสียง ",
                "checked": []
            },
            {
                "id": "13",
                "lyr": "c13_airqlt",
                "lyr_desc": "จุดตรวจวัดคุณภาพอากาศ ",
                "checked": []
            },
            {
                "id": "14",
                "lyr": "c14_waterqlt",
                "lyr_desc": "ตำแหน่งสถานีตรวจวัดคุณภาพน้ำ ",
                "checked": []
            },
            {
                "id": "15",
                "lyr": "c15_contour",
                "lyr_desc": "เส้นชั้นความสูง ",
                "checked": []
            },
            {
                "id": "16",
                "lyr": "c17_basin",
                "lyr_desc": "ขอบเขตลุ่มน้ำ ๒๕ ลุ่มน้ำหลัก ",
                "checked": []
            },
            {
                "id": "17",
                "lyr": "c18_stream",
                "lyr_desc": "ทางน้ำ ",
                "checked": []
            },
            {
                "id": "18",
                "lyr": "c19_natural_wtr_body",
                "lyr_desc": "แหล่งน้ำธรรมชาติ ",
                "checked": []
            },
            {
                "id": "19",
                "lyr": "c20_reservoir",
                "lyr_desc": "แหล่งน้ำที่มนุษย์สร้างขึ้น ",
                "checked": []
            },
            {
                "id": "20",
                "lyr": "c21_strm_gage",
                "lyr_desc": "ตำแหน่งสถานีตรวจวัดระดับน้ำ ",
                "checked": []
            },
            {
                "id": "21",
                "lyr": "c22_wshd_cl",
                "lyr_desc": "ชั้นคุณภาพลุ่มน้ำ ",
                "checked": []
            },
            {
                "id": "22",
                "lyr": "c23_vil_wtrsupply",
                "lyr_desc": "ประปาหมู่บ้าน",
                "checked": []
            },
            {
                "id": "23",
                "lyr": "c24_hydrogeology",
                "lyr_desc": "อุทกธรณีวิทยา ",
                "checked": []
            },
            {
                "id": "24",
                "lyr": "c25_well",
                "lyr_desc": "บ่อน้ำบาดาล ",
                "checked": []
            },
            {
                "id": "25",
                "lyr": "c26_geology",
                "lyr_desc": "ธรณีวิทยา ",
                "checked": []
            },
            {
                "id": "26",
                "lyr": "c27_soil",
                "lyr_desc": "แผนที่ดิน ",
                "checked": []
            },
            {
                "id": "27",
                "lyr": "c28_foresttype",
                "lyr_desc": "ขอบเขตชนิดของป่าไม้ ",
                "checked": []
            },
            {
                "id": "28",
                "lyr": "c29_nrf",
                "lyr_desc": "ป่าสงวนแห่งชาติ ",
                "checked": []
            },
            {
                "id": "29",
                "lyr": "c30_nprk",
                "lyr_desc": "อุทยานแห่งชาติ ",
                "checked": []
            },
            {
                "id": "30",
                "lyr": "c31_fprk",
                "lyr_desc": "วนอุทยาน ",
                "checked": []
            },
            {
                "id": "31",
                "lyr": "c32_wldsshp",
                "lyr_desc": "เขตรักษาพันธุ์สัตว์ป่า ",
                "checked": []
            },
            {
                "id": "32",
                "lyr": "c33_nhw",
                "lyr_desc": "เขตห้ามล่าสัตว์ป่า ",
                "checked": []
            },
            {
                "id": "33",
                "lyr": "c34_forestzoning",
                "lyr_desc": "การใช้ประโยชน์พื้นที่ปาไม้ ",
                "checked": []
            },
            {
                "id": "34",
                "lyr": "c35_alro",
                "lyr_desc": "พื้นที่ สปก. ",
                "checked": []
            },
            {
                "id": "35",
                "lyr": "c36_landuse",
                "lyr_desc": "ประเภทการใช้ที่ดิน ",
                "checked": []
            },
            {
                "id": "36",
                "lyr": "c37_soilsuit",
                "lyr_desc": "พื้นที่ศักยภาพในการใช้ที่ดิน ",
                "checked": []
            },
            {
                "id": "37",
                "lyr": "c38_heritage",
                "lyr_desc": "แหล่งศิลปกรรม ",
                "checked": []
            },
            {
                "id": "38",
                "lyr": "c39_road",
                "lyr_desc": "ถนน ",
                "checked": []
            },
            {
                "id": "39",
                "lyr": "c40_rail",
                "lyr_desc": "ทางรถไฟ ",
                "checked": []
            },
            {
                "id": "40",
                "lyr": "c41_harbour",
                "lyr_desc": "ท่าเรือ ",
                "checked": []
            },
            {
                "id": "41",
                "lyr": "c42_airport",
                "lyr_desc": "ท่าอากาศยาน ",
                "checked": []
            },
            {
                "id": "42",
                "lyr": "c43_electr",
                "lyr_desc": "ไฟฟ้า ",
                "checked": []
            },
            {
                "id": "43",
                "lyr": "c44_watersupply",
                "lyr_desc": "ประปา ",
                "checked": []
            },
            {
                "id": "44",
                "lyr": "c45_telephone",
                "lyr_desc": "โทรศัพท์ ",
                "checked": []
            },
            {
                "id": "45",
                "lyr": "c46_factory",
                "lyr_desc": "ที่ตั้งโรงงานอุตสาหกรรม ",
                "checked": []
            },
            {
                "id": "46",
                "lyr": "c47_hospital",
                "lyr_desc": "โรงพยาบาล ",
                "checked": []
            },
            {
                "id": "47",
                "lyr": "c48_school",
                "lyr_desc": "โรงเรียน ",
                "checked": []
            },
            {
                "id": "48",
                "lyr": "c49_religious",
                "lyr_desc": "ศาสนสถาน ",
                "checked": []
            },
            {
                "id": "49",
                "lyr": "c50_policestation",
                "lyr_desc": "สถานีตำรวจ ",
                "checked": []
            },
            {
                "id": "50",
                "lyr": "c51_gasoline",
                "lyr_desc": "สถานีบริการเชื้อเพลิง ",
                "checked": []
            },
            {
                "id": "51",
                "lyr": "c52_postoffice",
                "lyr_desc": "ไปรษณีย์ ",
                "checked": []
            },
            {
                "id": "52",
                "lyr": "c53_hazard",
                "lyr_desc": "พื้นที่เสี่ยงภัยจากสารอันตราย ",
                "checked": []
            },
            {
                "id": "53",
                "lyr": "c54_flood",
                "lyr_desc": "พื้นที่เสี่ยงภัยน้ำท่วม ",
                "checked": []
            },
            {
                "id": "54",
                "lyr": "c55_earthquake",
                "lyr_desc": "พื้นที่เสี่ยงภัยแผ่นดินไหว ",
                "checked": []
            },
            {
                "id": "55",
                "lyr": "c56_landslide",
                "lyr_desc": "พื้นที่เสี่ยงภัยดินถล่ม ",
                "checked": []
            },
            {
                "id": "56",
                "lyr": "c57_sinkhole",
                "lyr_desc": "พื้นที่เสี่ยงภัยหลุมยุบ ",
                "checked": []
            },
            {
                "id": "57",
                "lyr": "c58_drought",
                "lyr_desc": "พื้นที่เสี่ยงภัยแล้ง ",
                "checked": []
            },
            {
                "id": "58",
                "lyr": "c59_point_source",
                "lyr_desc": "ที่มีจุดกำเนิดแน่นอน ",
                "checked": []
            },
            {
                "id": "59",
                "lyr": "c60_non_point_source",
                "lyr_desc": "ที่ไม่ทราบจุดกำเนิดแน่นอน ",
                "checked": []
            },
            {
                "id": "60",
                "lyr": "c61_rf30y",
                "lyr_desc": "ปริมาณน้ำฝนเฉลี่ย ๓๐ ปี ",
                "checked": []
            },
            {
                "id": "61",
                "lyr": "c62_temp30y",
                "lyr_desc": "อุณหภูมิอากาศเฉลี่ย ๓๐ ปี ",
                "checked": []
            },
            {
                "id": "62",
                "lyr": "c63_encroachforest",
                "lyr_desc": "การบุกรุกป่าไม้ ",
                "checked": []
            },
            {
                "id": "63",
                "lyr": "c64_wetland",
                "lyr_desc": "พื้นที่ชุ่มน้ำ น้ำซับ น้ำจำ ",
                "checked": []
            },
            {
                "id": "64",
                "lyr": "c65_saltearth",
                "lyr_desc": "โป่งดิน โป่งน้ำ โป่งเทียม ",
                "checked": []
            }
        ];
        //show already layers
        console.log(this.alreadyLyr);
        //set already layer to checked
        for (var l in this.lyrs) {
            for (var a in this.alreadyLyr) {
                if (this.lyrs[l].lyr == this.alreadyLyr[a]) {
                    this.lyrs[l]['checked'].push(1);
                }
            }
        }
        //console.log(this.lyrs);
        //init lyr_ls array layers
        this.initLyrArr();
        //console.log(this.lyr_ls);    
    };
    LayerPage.prototype.initLyrArr = function () {
        //load alreadyLyr to array
        for (var l in this.alreadyLyr) {
            this.lyr_ls.push(this.alreadyLyr[l]);
        }
        //load lyr_ls to array
        for (var t in this.alreadyTh) {
            this.lyr_th.push(this.alreadyTh[t]);
        }
    };
    LayerPage.prototype.onChange = function (lyr, lyr_th, isChecked, index) {
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
    LayerPage.prototype.lyrSelected = function () {
        var data = {
            lyr_ls: this.lyr_ls,
            lyr_th: this.lyr_th
        };
        this.viewCtrl.dismiss(data);
    };
    LayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-layer',template:/*ion-inline-start:"C:\app\isnre2-android\src\pages\layer\layer.html"*/'<ion-header id="isnre-font">\n\n\n\n  <ion-navbar>\n\n    <ion-title>layer</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content id="isnre-font">\n\n  <h4>เลือกชั้นข้อมูล</h4>\n\n  <ion-scroll scrollX="true" scrollY="true" class="data"> \n\n  <ion-list>\n\n    <ion-item *ngFor="let lyr of lyrs; let i = index">\n\n      <ion-label>{{lyr.lyr_desc}}</ion-label>\n\n      <ion-checkbox [(ngModel)]="lyr.checked[0]" (ionChange)="onChange(lyr.lyr,lyr.lyr_desc,$event.checked, i)" value="lyr.lyr"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-scroll>\n\n  <div padding> <button ion-button (click)="lyrSelected()">กลับหน้าแผนที่</button></div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\app\isnre2-android\src\pages\layer\layer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LayerPage);
    return LayerPage;
}());

//# sourceMappingURL=layer.js.map

/***/ })

});
//# sourceMappingURL=1.js.map