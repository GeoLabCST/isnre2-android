webpackJsonp([20],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartDescPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartDescPage = (function () {
    function ChartDescPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    ChartDescPage.prototype.ionViewDidLoad = function () {
        this.initializePro();
    };
    ChartDescPage.prototype.initializePro = function () {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_prov.php')
            .subscribe(function (res) {
            _this.pros = res;
        }, function (error) {
            console.log(error);
        });
    };
    ChartDescPage.prototype.showData = function (e) {
        var _this = this;
        console.log(e);
        console.log(this.prov_ls);
        this.http.get('http://119.59.125.189/service/isnre_forest_report.php?prov_code=' + this.prov_ls.procode)
            .subscribe(function (res) {
            _this.forest = res;
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    ChartDescPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chart-desc',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\chart-desc\chart-desc.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>สอบถาม (Query)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <ion-label>เลือกจังหวัด</ion-label>\n        <ion-select [(ngModel)]="prov_ls" multiple="false" interface="action-sheet" (ngModelChange)="showData($event)">\n          <ion-option *ngFor="let pro of pros" [value]="pro">{{pro.prov_namt}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <p></p>\n    <hr>\n    <p></p>\n    <ul class="list" *ngFor="let f of forest; let i = index">\n      <li class="item">\n        คำนวณข้อมูลเนื้อที่ป่าของจังหวัด {{f.prov_namt}}\n        <p></p>\n      </li>\n      <li class="item">พื้นที่ป่าสงวนแห่งชาติ\n        <br/> {{f.nrf_m | number: \'2.\'}} ตารางเมตร\n        <br/> {{f.nrf_km | number: \'2.\'}} ตารางกิโลเมตร\n        <br/> {{f.area_nrf | number: \'2.\'}} ไร่\n        <p></p>\n      </li>\n      <hr>\n      <li class="item">พื้นที่อุทยานแห่งชาติ\n        <br/> {{f.nprf_m | number: \'2.\' }} ตารางเมตร\n        <br/> {{f.nprf_km | number: \'2.\'}} ตารางกิโลเมตร\n        <br/> {{f.area_nprf | number: \'2.\'}} ไร่\n        <p></p>\n      </li>\n      <hr>\n      <li class="item">พื้นที่วนอุทยาน\n        <br/> {{f.fprk_m | number: \'2.\'}} ตารางเมตร\n        <br/> {{f.fprk_km | number: \'2.\'}} ตารางกิโลเมตร\n        <br/> {{f.area_fprk | number: \'2.\'}} ไร่\n        <p></p>\n      </li>\n      <hr>\n      <li class="item">\n        <h3>คำนวณเปอร์เซ็นต์</h3>\n        <p>พื้นที่ป่าไม้ของจังหวัด {{f.per_prov}} %</p>\n        <p>พื้นที่ป่าไม้ของประเทศ {{f.per_th}} %</p>\n      </li>\n\n    </ul>\n\n\n\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\chart-desc\chart-desc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ChartDescPage);
    return ChartDescPage;
}());

//# sourceMappingURL=chart-desc.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_desc_chart_desc__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartPage = (function () {
    function ChartPage(navCtrl, navParams, loadingCtrl, view, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.view = view;
        this.http = http;
        this.lyr_sel = 'c29_nrf';
        this.loc_sel = 'all';
        this.loc_code = 'all';
        this.initializePro();
    }
    ChartPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ChartPage');
        this.initializeType();
        this.hchart(this.lyr_sel, this.loc_sel, this.loc_code);
    };
    ChartPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ChartPage.prototype.initializeType = function () {
        this.lyr_ls = [{
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
            }];
    };
    ChartPage.prototype.selLyr = function (lyr_sel) {
        this.lyr_sel = lyr_sel;
        this.hchart(this.lyr_sel, this.loc_sel, this.loc_code);
    };
    ChartPage.prototype.initializePro = function () {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_prov.php')
            .subscribe(function (res) {
            _this.pros = res;
        }, function (error) {
            console.log("Oooops!");
        });
    };
    ChartPage.prototype.initializeAmp = function (provcode) {
        var _this = this;
        //console.log(provcode.procode);
        this.loc_sel = "pro";
        this.loc_code = provcode.procode;
        this.http.get('http://119.59.125.189/service/isnre_amp.php?procode=' + provcode.procode)
            .subscribe(function (res) {
            _this.amps = res;
            _this.hchart(_this.lyr_sel, _this.loc_sel, _this.loc_code);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    ChartPage.prototype.initializeTam = function (ampcode) {
        var _this = this;
        this.loc_sel = "amp";
        this.loc_code = ampcode.ampcode;
        this.http.get('http://119.59.125.189/service/isnre_tam.php?ampcode=' + ampcode.ampcode)
            .subscribe(function (res) {
            //this.tams = res;
            _this.hchart(_this.lyr_sel, _this.loc_sel, _this.loc_code);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    ChartPage.prototype.hchart = function (lyr_sel, loc_sel, loc_code) {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "กำลังเรียกดูข้อมูล.." });
        loader.present();
        var lyr_desc;
        if (lyr_sel == 'c33_nhw') {
            lyr_desc = "เขตห้ามล่าสัตว์ป่า";
        }
        else if (lyr_sel == 'c30_nprk') {
            lyr_desc = "อุทยานแห่งชาติ";
        }
        else if (lyr_sel == 'c31_fprk') {
            lyr_desc = "วนอุทยาน";
        }
        else if (lyr_sel == 'c32_wldsshp') {
            lyr_desc = "เขตรักษาพันธุ์สัตว์ป่า";
        }
        else {
            lyr_desc = "ป่าสงวนแห่งชาติ";
        }
        // load from web
        this.http.get('http://119.59.125.189/service/isnre_forest_chart.php?lyr_sel=' + lyr_sel + '&loc_sel=' + loc_sel + '&loc_code=' + loc_code)
            .subscribe(function (res) {
            _this.chartData = res;
            //console.log('web',this.chartData);
        }, function (error) {
            console.log("Oooops!");
        });
        __WEBPACK_IMPORTED_MODULE_3_highcharts___default.a.setOptions({
            lang: {
                decimalPoint: '.',
                thousandsSep: ','
            }
        });
        setTimeout(function () {
            loader.dismiss();
            __WEBPACK_IMPORTED_MODULE_3_highcharts___default.a.chart('chart', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: lyr_desc
                },
                tooltip: {
                    pointFormat: '{series.name}: {point.y:.1f} ไร่<br></br>ร้อยละ: <b>{point.percentage:.1f}%</b>',
                    //pointFormatter: function() { 
                    //  return this.series.name+': '+this.y+' ไร่<br/> คิดเป็น: <b>{point.percentage:.1f}%</b>'},
                    shared: true
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (__WEBPACK_IMPORTED_MODULE_3_highcharts___default.a.theme && __WEBPACK_IMPORTED_MODULE_3_highcharts___default.a.theme.contrastTextColor) || 'black'
                            }
                        },
                        showInLegend: true
                    }
                },
                series: [{
                        name: 'เนื้อที่ป่า',
                        colorByPoint: true,
                        //data: this.chartData
                        data: _this.chartData
                    }],
                credits: {
                    enabled: false
                },
            });
        }, 1000);
    };
    ChartPage.prototype.showDesc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chart_desc_chart_desc__["a" /* ChartDescPage */], {});
    };
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chart',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\chart\chart.html"*/'<ion-header>\n\n  <ion-navbar id="isnre-font">\n    <ion-title>พื้นที่ป่า</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="showDesc()">\n        สอบถาม (Query)\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="isnre-font">\n  <ion-card id="chart" block></ion-card>\n  <div padding>\n    <h4>ค้นหาจากข้อมูลประกอบ (Attribute)</h4>\n  </div>\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <ion-label>เลือกประเภทป่า</ion-label>\n        <ion-select [(ngModel)]="type_ls" multiple="false" interface="action-sheet" (ngModelChange)="selLyr($event)">\n          <ion-option *ngFor="let lyr of lyr_ls" [value]="lyr.lyr">{{lyr.lyr_desc}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label>เลือกจังหวัด</ion-label>\n        <ion-select [(ngModel)]="prov_ls" multiple="false" interface="action-sheet" (ngModelChange)="initializeAmp($event)">\n          <ion-option *ngFor="let pro of pros" [value]="pro">{{pro.prov_namt}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>เลือกอำเภอ</ion-label>\n        <ion-select [(ngModel)]="amp_ls" multiple="false" interface="action-sheet" (ngModelChange)="initializeTam($event)">\n          <ion-option *ngFor="let amp of amps" [value]="amp">{{amp.amp_namt}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\chart\chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_share__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
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
    function ContactPage(navCtrl, navParams, fb, http, alertCtrl, loadingCtrl, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.shareService = shareService;
        this.pet = "puppies";
        // Receiving data via Service
        this.usrData = this.shareService.getUserData();
        console.log(this.usrData);
        //console.log(this.pos.lng);
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
    ContactPage.prototype.updatestu = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "กำลังบันทึกข้อมูล.." });
        var data = JSON.stringify({
            'name_user': this.reportForm.controls['name_user'].value,
            'lname_user': this.reportForm.controls['lname_user'].value,
            'tel_user': this.reportForm.controls['tel_user'].value,
            'prov_user': this.reportForm.controls['prov_user'].value,
            'amp_user': this.reportForm.controls['amp_user'].value,
            'tam_user': this.reportForm.controls['tam_user'].value,
            'email_user': this.reportForm.controls['email_user'].value,
            'pass_user': this.reportForm.controls['pass_user'].value,
            'id': '8'
        });
        console.log(data);
        loader.present();
        //http://localhost/isnre/php_app/update_profile.php
        this.http.post('http://119.59.125.189/isnre2/php_app/update_profile.php', data)
            .subscribe(function (res) {
            _this.res = res;
            if (_this.res.message == 'error') {
                loader.dismiss();
                var alert_1 = _this.alertCtrl.create({
                    title: 'ไม่สามารถบันทึกข้อมูลได้',
                    subTitle: 'กรุณาลองอีกครั้ง',
                    buttons: ['ok']
                });
                alert_1.present();
            }
            else if (_this.res.message == 'success') {
                loader.dismiss();
                var alert_2 = _this.alertCtrl.create({
                    title: 'แก้ไขข้อมูลเรียบร้อยแล้ว',
                    subTitle: '',
                    buttons: ['ok']
                });
                _this.shareService.setUserData(_this.res);
                alert_2.present();
            }
            else {
                loader.dismiss();
                var alert_3 = _this.alertCtrl.create({
                    title: 'ไม่สามารถบันทึกข้อมูลได้',
                    subTitle: 'กรุณาลองอีกครั้ง',
                    buttons: ['ok']
                });
                alert_3.present();
            }
        }, function (error) {
            console.log("Oooops!");
            loader.dismiss();
        });
    };
    ContactPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var id_user = this.shareService.usrData.id_user;
        var data2 = JSON.stringify({
            'id_user': id_user
        });
        //http://119.59.125.189/isnre2/php_app/view_stat.php
        var loader = this.loadingCtrl.create({ content: "...Loading" });
        loader.present();
        this.http.post("http://119.59.125.189/isnre2/php_app/view_stat.php", data2)
            .subscribe(function (res2) {
            _this.res2 = res2;
            console.log(res2);
            loader.dismiss();
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\contact\contact.html"*/'<ion-header id="isnre-font">\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>\n\n      ข้อมูลส่วนตัว\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="pet">\n\n      <ion-segment-button value="puppies">\n\n        โปรไฟล์\n\n      </ion-segment-button>\n\n      <ion-segment-button value="kittens">\n\n        สถิติการใช้งาน\n\n      </ion-segment-button>\n\n\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding default-background>\n\n  <ion-card>\n\n    <div [ngSwitch]="pet">\n\n      <!-- <ion-list *ngSwitchCase="\'puppies\'">\n\n        <img src="http://119.59.125.189/isnre2/img/pic_user/{{usrData.pic_user}}">\n\n        <ion-item>\n\n          <ion-icon name="contact" item-start large></ion-icon>\n\n          <h2>{{usrData.name_user}} {{usrData.lname_user}}</h2>\n\n          <p>เบอร์โทร : {{usrData.tel_user}}</p>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-icon name="pin" item-left large></ion-icon>\n\n          <p>จังหวัด : {{usrData.prov_user}}</p>\n\n          <p>อำเภอ : {{usrData.amp_user}}</p>\n\n          <p>ตำบล : {{usrData.tam_user}}</p>\n\n        </ion-item>\n\n      </ion-list> -->\n\n\n\n      <ion-list *ngSwitchCase="\'kittens\'">\n\n        <ion-list-header>\n\n          จำนวนที่เข้าใช้งานทั้งหมด {{res2.length}} ครั้ง\n\n        </ion-list-header>\n\n        <ion-list *ngFor="let item of res2">\n\n          <ion-item> เวลาเข้าใช้งาน {{item.date_acces}} </ion-item>\n\n        </ion-list>\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'puppies\'">\n\n        <ion-list>\n\n          <img src="http://119.59.125.189/isnre2/img/pic_user/{{usrData.pic_user}}">\n\n          <!-- <ion-item>\n\n            <ion-icon name="contact" item-start large></ion-icon>\n\n            <h2>{{usrData.name_user}} {{usrData.lname_user}}</h2>\n\n            <p>เบอร์โทร : {{usrData.tel_user}}</p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-icon name="pin" item-left large></ion-icon>\n\n            <p>จังหวัด : {{usrData.prov_user}}</p>\n\n            <p>อำเภอ : {{usrData.amp_user}}</p>\n\n            <p>ตำบล : {{usrData.tam_user}}</p>\n\n          </ion-item> -->\n\n\n\n          <form novalidate [formGroup]="reportForm">\n\n            <ion-item>\n\n              <ion-label>ชื่อ</ion-label>\n\n              <ion-input type="text" formControlName="name_user" value="{{usrData.name_user}}"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>นามสกุล</ion-label>\n\n              <ion-input type="text" formControlName="lname_user" value="{{usrData.lname_user}}"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>เบอร์โทร</ion-label>\n\n              <ion-input type="text" formControlName="tel_user" value="{{usrData.tel_user}}"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>จังหวัด</ion-label>\n\n              <ion-input type="text" formControlName="prov_user" value="{{usrData.prov_user}}"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>อำเภอ</ion-label>\n\n              <ion-input type="text" formControlName="amp_user" value="{{usrData.amp_user}}"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>ตำบล</ion-label>\n\n              <ion-input type="text" formControlName="tam_user" value="{{usrData.tam_user}}"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-list-header>\n\n              การเข้าใช้งานระบบ\n\n            </ion-list-header>\n\n\n\n            <ion-item>\n\n              <ion-label>Email</ion-label>\n\n              <ion-input type="text" formControlName="email_user" value="{{usrData.email_user}}"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label>Password</ion-label>\n\n              <ion-input type="text" formControlName="pass_user" value="{{usrData.pass_user}}"></ion-input>\n\n            </ion-item>\n\n\n\n          </form>\n\n\n\n        </ion-list>\n\n\n\n        <div padding>\n\n          <button ion-button full (click)="updatestu()">บันทึกข้อมูล</button>\n\n        </div>\n\n      </ion-list>\n\n\n\n    </div>\n\n\n\n\n\n\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_share__["a" /* ShareService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DssPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_measure_dist_leaflet_measure__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_measure_dist_leaflet_measure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_measure_dist_leaflet_measure__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet_gridlayer_googlemutant__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet_gridlayer_googlemutant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_leaflet_gridlayer_googlemutant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_share__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__location_location__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DssPage = (function () {
    function DssPage(navCtrl, navParams, http, geolocation, modalCtrl, alertCtrl, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.shareService = shareService;
        this.alreadyLyr = [];
        this.alreadyTh = [];
        this.pos2 = [];
        this.usrId = navParams.get('usrId');
        this.locType = navParams.get('locType');
        this.locName = navParams.get('locName');
        this.locCode = navParams.get('locCode');
        this.bbox = navParams.get('bbox');
    }
    DssPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        // initial map
        if (typeof this.locType !== 'undefined') {
            this.locFn(this.locType, this.locCode, this.bbox);
        }
        else {
            this.locFn("all", "all", "all");
        }
    };
    DssPage.prototype.ionViewWillEnter = function () {
        //this.loadMap();
    };
    DssPage.prototype.onMapClick = function (e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        return this.showInfo(lat, lng);
    };
    DssPage.prototype.loadMap = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.map('map-dss', {
            center: [13.00, 101.50],
            zoom: 6,
            zoomControl: false,
        });
        var roads = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.gridLayer.googleMutant({
            type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        }).addTo(this.map);
        var satellite = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.gridLayer.googleMutant({
            type: 'satellite' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        });
        var terrain = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.gridLayer.googleMutant({
            type: 'terrain' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        });
        var c28_foresttype = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
            layers: 'isnre:c28_foresttype',
            format: 'image/png',
            zIndex: 5,
            transparent: true
        });
        var c29_nrf = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
            layers: 'isnre:c29_nrf',
            format: 'image/png',
            zIndex: 5,
            transparent: true
        });
        var c30_nprk = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
            layers: 'isnre:c30_nprk',
            format: 'image/png',
            zIndex: 5,
            transparent: true
        });
        var c32_wldsshp = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
            layers: 'isnre:c32_wldsshp',
            format: 'image/png',
            zIndex: 5,
            transparent: true
        });
        var c33_nhw = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
            layers: 'isnre:c33_nhw',
            format: 'image/png',
            zIndex: 5,
            transparent: true
        });
        var c31_fprk = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
            layers: 'isnre:c31_fprk',
            format: 'image/png',
            zIndex: 5,
            transparent: true
        });
        var c02_province = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
            layers: 'isnre:c02_province',
            format: 'image/png',
            zIndex: 5,
            transparent: true
        });
        var c03_district = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
            layers: 'isnre:c03_district',
            format: 'image/png',
            zIndex: 5,
            transparent: true
        });
        var c04_subdistrict = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", {
            layers: 'isnre:c04_subdistrict',
            format: 'image/png',
            zIndex: 5,
            transparent: true
        });
        var baseLayers = {
            "แผนที่ถนน": roads,
            "แผนที่ภาพดาวเทียม": satellite,
            "แผนที่ภูมิประเทศ": terrain.addTo(this.map),
        };
        var overlayLayers = {
            "เขตจังหวัด": c02_province.addTo(this.map),
            "เขตอำเภอ": c03_district.addTo(this.map),
            "เขตตำบล": c04_subdistrict,
            "ขอบเขตชนิดของป่าไม้": c28_foresttype.addTo(this.map),
            "ป่าสงวนแห่งชาติ": c29_nrf,
            "อุทยานแห่งชาติ": c30_nprk,
            "วนอุทยาน": c31_fprk,
            "เขตรักษาพันธุ์สัตว์ป่า": c32_wldsshp,
            "เขตห้ามล่าสัตว์ป่า": c33_nhw,
        };
        __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.control.layers(baseLayers, overlayLayers).addTo(this.map);
    };
    DssPage.prototype.locFn = function (locType, locCode, bbox) {
        if (locType == 'all') {
            this.alreadyLyr.push('c02_province');
            this.alreadyTh.push('ขอบเขตจังหวัด');
            this.lyr = 'c02_province';
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                zIndex: 5,
                transparent: true
            };
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [7.09056009354302, 104.18985100564],
                [19.7358085431644, 98.6106951024982]
            ]);
        }
        else if (locType == 'tam') {
            this.alreadyLyr.push('c04_subdistrict');
            this.alreadyTh.push('ขอบเขตตำบล');
            this.lyr = 'c04_subdistrict';
            this.cql = 'tamcode=' + locCode;
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                transparent: true,
                zIndex: 5,
                CQL_FILTER: this.cql
            };
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [Number(bbox[1]), Number(bbox[2])],
                [Number(bbox[3]), Number(bbox[0])]
            ]);
        }
        else if (locType == 'amp') {
            this.alreadyLyr.push('c03_district');
            this.alreadyTh.push('ขอบเขตอำเภอ');
            this.lyr = 'c03_district';
            this.cql = 'ampcode=' + locCode;
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                transparent: true,
                zIndex: 5,
                CQL_FILTER: this.cql
            };
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [Number(bbox[1]), Number(bbox[2])],
                [Number(bbox[3]), Number(bbox[0])]
            ]);
        }
        else if (locType == 'pro') {
            this.alreadyLyr.push('c02_province');
            this.alreadyTh.push('ขอบเขตจังหวัด');
            this.lyr = 'c02_province';
            this.cql = 'procode=' + locCode;
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                transparent: true,
                zIndex: 5,
                CQL_FILTER: this.cql
            };
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [Number(bbox[1]), Number(bbox[2])],
                [Number(bbox[3]), Number(bbox[0])]
            ]);
        }
    };
    DssPage.prototype.lyrFn = function (lyr_ls) {
        //list layers
        this.map.eachLayer(function (l) {
            if (l instanceof __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.TileLayer.WMS) {
                l.remove();
            }
        });
        //add layer
        for (var ls in lyr_ls) {
            this.lyr = lyr_ls[ls];
            if (typeof this.locType == 'undefined') {
                this.mapOtp = {
                    layers: 'isnre:' + this.lyr,
                    format: 'image/png',
                    zIndex: 5,
                    transparent: true
                };
            }
            else {
                this.mapOtp = {
                    layers: 'isnre:' + this.lyr,
                    format: 'image/png',
                    transparent: true,
                    zIndex: 5,
                    CQL_FILTER: this.cql
                };
            }
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
        }
    };
    DssPage.prototype.addMeasure = function () {
        var options = {
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            activeColor: '#ff7700',
            completedColor: '#ff0000',
            someNewUnit: {
                factor: 1600,
                display: 'rai',
                decimals: 2 // Number of decimals to round results when using this unit. `0` is the default value if not specified.
            },
            myOtherNewUnit: {
                factor: 1234,
                display: 'My Other Unit',
                decimals: 0
            }
        };
        if (this.measure == false) {
            this.control = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.control.measure(options).addTo(this.map);
            this.measure = true;
        }
        else {
            this.measure = false;
            this.map.removeControl(this.control);
        }
    };
    DssPage.prototype.addLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (res) {
            _this.pos = [res.coords.latitude, res.coords.longitude];
            _this.map.setView(_this.pos, 16);
            _this.marker = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker(_this.pos, { draggable: true }).addTo(_this.map).bindPopup("ตำแหน่งของคุณ").openPopup();
            console.log(_this.pos);
            // drage marker
            _this.marker.on("dragend", function (e) {
                console.log([e.target._latlng.lat, e.target._latlng.lng]);
            });
        });
    };
    DssPage.prototype.addSelectarea = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__location_location__["a" /* LocationPage */], {});
    };
    DssPage.prototype.addLayer = function () {
        var _this = this;
        var modelLyr = this.modalCtrl.create('LayerPage', {
            alreadyLyr: this.alreadyLyr,
            alreadyTh: this.alreadyTh
        });
        modelLyr.present();
        //call lyrFn when onDidDismiss
        modelLyr.onDidDismiss(function (data) {
            _this.alreadyLyr = data.lyr_ls;
            _this.alreadyTh = data.lyr_th;
            //load array layer to map
            _this.lyrFn(_this.alreadyLyr);
        });
    };
    DssPage.prototype.addLegend = function () {
        var modalLeg = this.modalCtrl.create('LegendPage', {
            alreadyLyr: this.alreadyLyr,
            alreadyTh: this.alreadyTh
        });
        modalLeg.present();
    };
    DssPage.prototype.addData = function () {
        if (typeof this.pos == 'undefined') {
            var alert_1 = this.alertCtrl.create({
                //title: 'คุณยังไม่ได้ระบุตำแหน่ง!',
                subTitle: 'กรุณากดที่ปุ่ม "ตำแหน่งปัจจุบัน" และขยับ marker ไปยังตำแหน่งที่ต้องการก่อนเพิ่มข้อมูล',
                buttons: ['ตกลง']
            });
            alert_1.present();
        }
        else {
            var modalAdd = this.modalCtrl.create('AddDataPage', {
                pos: this.marker.getLatLng(),
                usrId: this.usrId
            });
            modalAdd.present();
            //console.log(this.pos);
        }
    };
    DssPage.prototype.enableInfo = function () {
        if (this.info == false) {
            this.state = 'info';
            this.info = true;
        }
        else {
            this.state = '';
            this.info = false;
        }
    };
    DssPage.prototype.showInfo = function (lat, lng) {
        //this.shareService.setUserData(e);
        var modalLeg = this.modalCtrl.create('InfoPage', {
            lat: lat,
            lng: lng,
            alreadyLyr: this.alreadyLyr,
            alreadyTh: this.alreadyTh
        });
        modalLeg.present();
    };
    DssPage.prototype.showBuffer = function () {
        var _this = this;
        console.log('buffer');
        this.drawnItems = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.featureGroup().addTo(this.map);
        var options = {
            position: 'topleft',
            draw: {
                polyline: false,
                polygon: false,
                circle: true,
                rectangle: false,
                marker: false,
                circlemarker: false
            },
            edit: {
                featureGroup: this.drawnItems,
                remove: true
            }
        };
        if (this.circle == false) {
            // this.circleControl = L.control.measure(options).addTo(this.map);
            this.drawControl = new __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.Control.Draw(options);
            this.map.addControl(this.drawControl);
            this.circle = true;
            this.map.on(__WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.Draw.Event.CREATED, function (e) {
                var layer = e.layer;
                _this.drawnItems.addLayer(layer);
            });
        }
        else {
            //L.Control.remove()
            this.circle = false;
            this.map.removeControl(this.drawControl);
        }
    };
    DssPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dss',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\dss\dss.html"*/'<ion-header>\n\n  <ion-navbar id="isnre-font">\n    <ion-title>สนับสนุนการตัดสินใจ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-fab right bottom>\n    <button ion-fab color="danger">\n      <ion-icon name="arrow-dropup"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="showBuffer()">\n        <ion-icon name="radio-button-off" color="red"></ion-icon>\n        <ion-label>buffering</ion-label>\n      </button>\n      <button ion-fab (click)="addSelectarea()">\n        <ion-icon name="search" color="green"></ion-icon>\n        <ion-label>ค้นหา</ion-label>\n      </button>\n      <!-- <button ion-fab (click)="addLayer()">\n        <ion-icon name="logo-buffer" color="green"></ion-icon>\n        <ion-label>ชั้นข้อมูล</ion-label>\n      </button> -->\n      <button ion-fab (click)="addLegend()">\n        <ion-icon name="bowtie" color="green"></ion-icon>\n        <ion-label>สัญลักษณ์</ion-label>\n      </button>\n      <button ion-fab (click)="addMeasure()">\n        <ion-icon name="git-pull-request" color="green"></ion-icon>\n        <ion-label>เครื่องมือวัด</ion-label>\n      </button>\n      <button ion-fab (click)="addLocation()">\n        <ion-icon name="locate" color="blue"></ion-icon>\n        <ion-label>ตำแหน่งปัจจุบัน</ion-label>\n      </button>\n      <button ion-fab (click)="addData()">\n        <ion-icon name="pin" color="red"></ion-icon>\n        <ion-label>เพิ่มข้อมูล</ion-label>\n      </button>\n      <button ion-fab (click)="enableInfo()">\n        <ion-icon name="information-circle"></ion-icon>\n        <ion-label>Popup info</ion-label>\n      </button>\n\n    </ion-fab-list>\n  </ion-fab>\n  <div id="map-dss"></div>\n</ion-content>\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\dss\dss.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_service_share__["a" /* ShareService */]])
    ], DssPage);
    return DssPage;
}());

//# sourceMappingURL=dss.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_measure_dist_leaflet_measure__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_measure_dist_leaflet_measure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet_measure_dist_leaflet_measure__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_gridlayer_googlemutant__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_gridlayer_googlemutant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_gridlayer_googlemutant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_share__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__location_location__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {Geolocation} from '@ionic-native/geolocation';






var HomePage = (function () {
    function HomePage(navCtrl, navParams, http, 
        // private geolocation: Geolocation,
        modalCtrl, alertCtrl, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.shareService = shareService;
        this.alreadyLyr = [];
        this.alreadyTh = [];
        this.pos2 = [];
        this.usrId = navParams.get('usrId');
        this.locType = navParams.get('locType');
        this.locName = navParams.get('locName');
        this.locCode = navParams.get('locCode');
        this.bbox = navParams.get('bbox');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        // initial map
        if (typeof this.locType !== 'undefined') {
            this.locFn(this.locType, this.locCode, this.bbox);
        }
        else {
            this.locFn("all", "all", "all");
        }
    };
    HomePage.prototype.ionViewWillEnter = function () {
        //this.loadMap();
    };
    HomePage.prototype.onMapClick = function (e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        return this.showInfo(lat, lng);
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map('map1', {
            center: [13.00, 101.50],
            zoom: 5,
            zoomControl: false,
        });
        var roads = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.gridLayer.googleMutant({
            type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        }).addTo(this.map);
        var satellite = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.gridLayer.googleMutant({
            type: 'satellite' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        });
        var terrain = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.gridLayer.googleMutant({
            type: 'terrain' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        });
        var baseLayers = {
            "แผนที่ถนน": roads,
            "แผนที่ภาพดาวเทียม": satellite,
            "แผนที่ภูมิประเทศ": terrain,
        };
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.control.layers(baseLayers).addTo(this.map);
        //set measure default
        this.measure = false;
        //get featureinfo
        //this.map.on('click', this.showInfo);
        this.map.on('click', function (e) { _this.onMapClick(e); });
    };
    HomePage.prototype.locFn = function (locType, locCode, bbox) {
        if (locType == 'all') {
            this.alreadyLyr.push('c02_province');
            this.alreadyTh.push('ขอบเขตจังหวัด');
            this.lyr = 'c02_province';
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                zIndex: 5,
                transparent: true
            };
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [7.09056009354302, 104.18985100564],
                [19.7358085431644, 98.6106951024982]
            ]);
        }
        else if (locType == 'tam') {
            this.alreadyLyr.push('c04_subdistrict');
            this.alreadyTh.push('ขอบเขตตำบล');
            this.lyr = 'c04_subdistrict';
            this.cql = 'tamcode=' + locCode;
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                transparent: true,
                zIndex: 5,
                CQL_FILTER: this.cql
            };
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [Number(bbox[1]), Number(bbox[2])],
                [Number(bbox[3]), Number(bbox[0])]
            ]);
        }
        else if (locType == 'amp') {
            this.alreadyLyr.push('c03_district');
            this.alreadyTh.push('ขอบเขตอำเภอ');
            this.lyr = 'c03_district';
            this.cql = 'ampcode=' + locCode;
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                transparent: true,
                zIndex: 5,
                CQL_FILTER: this.cql
            };
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [Number(bbox[1]), Number(bbox[2])],
                [Number(bbox[3]), Number(bbox[0])]
            ]);
        }
        else if (locType == 'pro') {
            this.alreadyLyr.push('c02_province');
            this.alreadyTh.push('ขอบเขตจังหวัด');
            this.lyr = 'c02_province';
            this.cql = 'procode=' + locCode;
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                transparent: true,
                zIndex: 5,
                CQL_FILTER: this.cql
            };
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [Number(bbox[1]), Number(bbox[2])],
                [Number(bbox[3]), Number(bbox[0])]
            ]);
        }
    };
    HomePage.prototype.lyrFn = function (lyr_ls) {
        //list layers
        this.map.eachLayer(function (l) {
            if (l instanceof __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.TileLayer.WMS) {
                l.remove();
            }
        });
        //add layer
        for (var ls in lyr_ls) {
            this.lyr = lyr_ls[ls];
            if (typeof this.locType == 'undefined') {
                this.mapOtp = {
                    layers: 'isnre:' + this.lyr,
                    format: 'image/png',
                    zIndex: 5,
                    transparent: true
                };
            }
            else {
                this.mapOtp = {
                    layers: 'isnre:' + this.lyr,
                    format: 'image/png',
                    transparent: true,
                    zIndex: 5,
                    CQL_FILTER: this.cql
                };
            }
            __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
        }
    };
    HomePage.prototype.addMeasure = function () {
        var options = {
            position: 'topright',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            activeColor: '#ff7700',
            completedColor: '#ff0000',
            someNewUnit: {
                factor: 1600,
                display: 'rai',
                decimals: 2 // Number of decimals to round results when using this unit. `0` is the default value if not specified.
            },
            myOtherNewUnit: {
                factor: 1234,
                display: 'My Other Unit',
                decimals: 0
            }
        };
        if (this.measure == false) {
            this.control = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.control.measure(options).addTo(this.map);
            this.measure = true;
            //console.log(this.measure);
        }
        else {
            //L.Control.remove()
            this.measure = false;
            //console.log(this.measure);
            this.map.removeControl(this.control);
        }
    };
    HomePage.prototype.gotoWellcome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */]);
    };
    HomePage.prototype.addSelectarea = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__location_location__["a" /* LocationPage */], {});
    };
    HomePage.prototype.addLayer = function () {
        var _this = this;
        var modelLyr = this.modalCtrl.create('LayerPage', {
            alreadyLyr: this.alreadyLyr,
            alreadyTh: this.alreadyTh
        });
        modelLyr.present();
        //call lyrFn when onDidDismiss
        modelLyr.onDidDismiss(function (data) {
            _this.alreadyLyr = data.lyr_ls;
            _this.alreadyTh = data.lyr_th;
            //load array layer to map
            _this.lyrFn(_this.alreadyLyr);
        });
    };
    HomePage.prototype.addLegend = function () {
        var modalLeg = this.modalCtrl.create('LegendPage', {
            alreadyLyr: this.alreadyLyr,
            alreadyTh: this.alreadyTh
        });
        modalLeg.present();
    };
    HomePage.prototype.addData = function () {
        if (typeof this.pos == 'undefined') {
            var alert_1 = this.alertCtrl.create({
                //title: 'คุณยังไม่ได้ระบุตำแหน่ง!',
                subTitle: 'กรุณากดที่ปุ่ม "ตำแหน่งปัจจุบัน" และขยับ marker ไปยังตำแหน่งที่ต้องการก่อนเพิ่มข้อมูล',
                buttons: ['ตกลง']
            });
            alert_1.present();
        }
        else {
            var modalAdd = this.modalCtrl.create('AddDataPage', {
                pos: this.marker.getLatLng(),
                usrId: this.usrId
            });
            modalAdd.present();
            //console.log(this.pos);
        }
    };
    HomePage.prototype.showInfo = function (lat, lng) {
        //this.shareService.setUserData(e);
        var modalLeg = this.modalCtrl.create('InfoPage', {
            lat: lat,
            lng: lng,
            alreadyLyr: this.alreadyLyr,
            alreadyTh: this.alreadyTh
        });
        modalLeg.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\home\home.html"*/'\n<ion-header>\n\n  <ion-toolbar id="isnre-font">\n    <ion-title></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)=\'gotoWellcome()\'>\n        <ion-icon name="person-add">เข้าสู่ระบบ</ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-fab right bottom>\n    <button ion-fab color="danger"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="addLayer()"><ion-icon name="logo-buffer" color="green"></ion-icon><ion-label>ชั้นข้อมูล</ion-label></button>          \n      <button ion-fab (click)="addLegend()"><ion-icon name="bowtie" color="green"></ion-icon><ion-label>สัญลักษณ์</ion-label></button>    \n \n    </ion-fab-list>\n  </ion-fab>\n<div id="map1"></div>\n</ion-content>\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_service_share__["a" /* ShareService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(117);
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
    function RegisterPage(transfer, fb, camera, navCtrl, 
        //private navParams : NavParams, 
        loadingCtrl, alertCtrl, toastCtrl, http) {
        this.transfer = transfer;
        this.fb = fb;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        //this.location= navParams.get('location');
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
        //console.log(this.location);
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
            _this.res = res;
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
            if (_this.res.message == 'error-email') {
                loader.dismiss();
                _this.gotoHome();
                var alert_1 = _this.alertCtrl.create({
                    title: 'ไม่สามารถบันทึกได้!',
                    subTitle: 'E-Mail ของท่านเคยมีการสมัครสมาชิกแล้ว กรุณาเข้าสู่ระบบ',
                    buttons: ['ok']
                });
                alert_1.present();
            }
            else if (_this.res.message == 'success') {
                loader.dismiss();
                _this.gotoHome();
                var alert_2 = _this.alertCtrl.create({
                    title: 'ลงทะเบียนเสร็จสิ้น',
                    subTitle: 'ท่านสามารถ Log in เข้าใช้งานระบบได้ทันที',
                    buttons: ['ok']
                });
                alert_2.present();
            }
            else if (_this.res.message == 'error-other') {
                loader.dismiss();
                var alert_3 = _this.alertCtrl.create({
                    title: 'ไม่สามารถบันทึกข้อมูลได้',
                    subTitle: 'กรุณาลองอีกครั้ง',
                    buttons: ['ok']
                });
                alert_3.present();
            }
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
        fileTransfer.upload(this.imageURI, 'http://119.59.125.189/isnre2/php_app/isnre_upload.php', options)
            .then(function (res) {
            loader.dismiss();
            _this.gotoHome();
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
            selector: 'page-register',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\register\register.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>REGISTER</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<!-- Themes Register + logo -->\n\n<ion-content  background-size default-background  id="isnre-font">\n\n        <ion-row wrap padding>\n\n            <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <!--Form-->\n\n                  <form novalidate [formGroup]="reportForm" >\n\n                <div class="form">\n\n                    <!--Form Title-->\n\n                    <h1 title text-right>สมัครสมาชิกใหม่</h1>\n\n                    <!---Input field username-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>ชื่อ</ion-label>\n\n                        <ion-input required type="text" formControlName="name_user" ></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field password-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>นามสกุล</ion-label>\n\n                        <ion-input required type="text" formControlName="lname_user"></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field country-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>เบอร์โทรศัพท์</ion-label>\n\n                        <ion-input required type="number" formControlName="tel_user"   ></ion-input>\n\n                    </ion-item>\n\n                    <!---Input field city-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>จังหวัด</ion-label>\n\n                        <ion-input required type="text" formControlName="prov_user" ></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>อำเภอ</ion-label>\n\n                        <ion-input required type="text" formControlName="amp_user" ></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>ตำบล</ion-label>\n\n                        <ion-input required type="text" formControlName="tam_user" ></ion-input>\n\n                    </ion-item>\n\n\n\n                 \n\n                    <ion-item  no-padding>\n\n                      <ion-label floating>สิทธิ์การใช้งาน</ion-label>\n\n                      <ion-select formControlName="level_user">\n\n                        <ion-option value="operational" >ระดับปฏิบัติการ</ion-option>\n\n                        <ion-option value="analytical">ระดับวิเคราะห์</ion-option>\n\n                        <ion-option value="executive">ระดับบริหาร</ion-option>\n\n                      </ion-select>\n\n                    </ion-item>\n\n\n\n                    <!---Input field email-->\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>email <small>*ใช้ในการเข้าสู่ระบบ</small></ion-label>\n\n                        <ion-input required type="email" formControlName="email_user" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" ></ion-input>\n\n                    </ion-item>\n\n                    <ion-item no-padding>\n\n                        <ion-label floating>รหัสผ่าน <small>*ใช้ในการเข้าสู่ระบบ</small></ion-label>\n\n                        <ion-input required type="password" formControlName="pass_user"  ></ion-input>\n\n                    </ion-item>\n\n\n\n\n\n                   \n\n\n\n                       <button ion-button block icon-left (click)="takePicture()">\n\n                          <ion-icon ios="ios-camera" md="md-camera"></ion-icon> ถ่ายภาพ\n\n                        </button>\n\n                        <ion-card>\n\n                          <img [src]="imageURI" *ngIf="imageURI" />\n\n                        </ion-card>\n\n                     <hr>\n\n\n\n                    <!---Register button-->\n\n                     <button ion-button block type="submit" [disabled]="!reportForm.valid" (click)="submit()">สร้างบัญชีใหม่</button>\n\n                </div>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 135:
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
webpackEmptyAsyncContext.id = 135;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		302,
		19
	],
	"../pages/add-data/add-data.module": [
		303,
		4
	],
	"../pages/chart-desc/chart-desc.module": [
		304,
		18
	],
	"../pages/chart/chart.module": [
		305,
		17
	],
	"../pages/contact/contact.module": [
		306,
		16
	],
	"../pages/dss/dss.module": [
		307,
		15
	],
	"../pages/forget/forget.module": [
		308,
		3
	],
	"../pages/formula-1/formula-1.module": [
		310,
		14
	],
	"../pages/formula-2/formula-2.module": [
		309,
		13
	],
	"../pages/formula-3/formula-3.module": [
		311,
		12
	],
	"../pages/formula-4/formula-4.module": [
		312,
		11
	],
	"../pages/home/home.module": [
		313,
		10
	],
	"../pages/info/info.module": [
		314,
		2
	],
	"../pages/layer/layer.module": [
		315,
		1
	],
	"../pages/legend/legend.module": [
		316,
		0
	],
	"../pages/location/location.module": [
		317,
		9
	],
	"../pages/map/map.module": [
		318,
		8
	],
	"../pages/other/other.module": [
		319,
		7
	],
	"../pages/register/register.module": [
		320,
		6
	],
	"../pages/welcome/welcome.module": [
		321,
		5
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
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_chart__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dss_dss__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HomePage } from '../home/home';





var TabsPage = (function () {
    //tab4Root: any = LocationPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__dss_dss__["a" /* DssPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__chart_chart__["a" /* ChartPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\tabs\tabs.html"*/'<ion-tabs id="isnre-font">\n\n  <ion-tab [root]="tab1Root" tabTitle="แผนที่" tabIcon="map"></ion-tab>\n\n  <!-- <ion-tab [root]="tab4Root" tabTitle="แผนที่2" tabIcon="map"></ion-tab> -->\n\n  <ion-tab [root]="tab2Root" tabTitle="คำนวณคาร์บอน" tabIcon="calculator"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="DSS" tabIcon="logo-buffer"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="พื้นที่ป่า" tabIcon="stats"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="ข้อมูลส่วนตัว" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 221:
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
            selector: 'page-other',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\other\other.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Contact Page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\other\other.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OtherPage);
    return OtherPage;
}());

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_formula_1_formula_1__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_formula_2_formula_2__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_formula_3_formula_3__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_formula_4_formula_4__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_other_other__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_location_location__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_map_map__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chart_chart__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_dss_dss__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_home__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_service_share__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_chart_desc_chart_desc__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_screenshot__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// import { AuthServiceProvider } from '../providers/auth-service/auth-service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_formula_1_formula_1__["a" /* Formula_1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_formula_2_formula_2__["a" /* Formula_2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_formula_3_formula_3__["a" /* Formula_3Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_formula_4_formula_4__["a" /* Formula_4Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_dss_dss__["a" /* DssPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chart_desc_chart_desc__["a" /* ChartDescPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-data/add-data.module#AddDataPageModule', name: 'AddDataPage', segment: 'add-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chart-desc/chart-desc.module#ChartDescPageModule', name: 'ChartDescPage', segment: 'chart-desc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chart/chart.module#ChartPageModule', name: 'ChartPage', segment: 'chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dss/dss.module#DssPageModule', name: 'DssPage', segment: 'dss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget/forget.module#ForgetPageModule', name: 'ForgetPage', segment: 'forget', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formula-2/formula-2.module#Formula_2PageModule', name: 'Formula_2Page', segment: 'formula-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formula-1/formula-1.module#Formula_1PageModule', name: 'Formula_1Page', segment: 'formula-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formula-3/formula-3.module#Formula_3PageModule', name: 'Formula_3Page', segment: 'formula-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formula-4/formula-4.module#Formula_4PageModule', name: 'Formula_4Page', segment: 'formula-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layer/layer.module#LayerPageModule', name: 'LayerPage', segment: 'layer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legend/legend.module#LegendPageModule', name: 'LegendPage', segment: 'legend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_formula_1_formula_1__["a" /* Formula_1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_formula_2_formula_2__["a" /* Formula_2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_formula_3_formula_3__["a" /* Formula_3Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_formula_4_formula_4__["a" /* Formula_4Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_dss_dss__["a" /* DssPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chart_desc_chart_desc__["a" /* ChartDescPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_screenshot__["a" /* Screenshot */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_service_share__["a" /* ShareService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formula_2_formula_2__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formula_3_formula_3__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formula_4_formula_4__ = __webpack_require__(40);
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
    function AboutPage(navCtrl, navParams, screenshot) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenshot = screenshot;
        this.state = false;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.reset = function () {
        var self = this;
        setTimeout(function () {
            self.state = false;
        }, 1000);
    };
    AboutPage.prototype.screenShot = function () {
        var _this = this;
        this.screenshot.save('jpg', 80).then(function (res) {
            _this.screen = res.filePath;
            _this.state = true;
            _this.reset();
        });
    };
    AboutPage.prototype.Formula1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__["a" /* Formula_1Page */]);
    };
    AboutPage.prototype.Formula2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__formula_2_formula_2__["a" /* Formula_2Page */]);
    };
    AboutPage.prototype.Formula3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__formula_3_formula_3__["a" /* Formula_3Page */]);
    };
    AboutPage.prototype.Formula4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__formula_4_formula_4__["a" /* Formula_4Page */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>การนำขยะไปแปรรูป</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="screenShot()">\n\n        <ion-icon name="print"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n\n\n  <img src="{{ screen }}" *ngIf="state">\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger">\n\n      <ion-icon name="arrow-dropup"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab>\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การนำขยะไปแปรรูป</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula1()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>นำขยะรีไซเคิลไปจำหน่าย</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula2()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>อนุรักษ์ป่าพื้นที่สีเขียวเดิม</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula3()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การปลูกต้นไม้ใหม่</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula4()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</ion-label>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n  <iframe src="http://119.59.125.189/isnre2/pages/formula_app1.php" frameborder="0" width="100%" height="100%"></iframe>\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__["a" /* Screenshot */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';

// import { AboutPage } from '../pages/about/about';
// import { Formula_1Page } from '../pages/formula-1/formula-1';
// import { Formula_2Page } from '../pages/formula-2/formula-2';
// import { Formula_3Page } from '../pages/formula-3/formula-3';
// import { Formula_4Page } from '../pages/formula-4/formula-4';
var MyApp = (function () {
    //pages: Array<{title: string, component: any}>;
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //@ViewChild(Nav) nav: Nav;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\app\app.html"*/'<!-- <ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareService = (function () {
    function ShareService() {
        this.usrData = "";
    }
    ShareService.prototype.setUserData = function (usrData) {
        this.usrData = usrData;
    };
    ShareService.prototype.setLatLon = function (dat) {
        this.dat = dat;
    };
    ShareService.prototype.getUserData = function () {
        return this.usrData;
    };
    ShareService.prototype.getLatLon = function () {
        return this.dat;
    };
    ShareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ShareService);
    return ShareService;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formula_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formula_2_formula_2__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formula_3_formula_3__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screenshot__ = __webpack_require__(35);
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
    function Formula_1Page(navCtrl, navParams, screenshot) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenshot = screenshot;
        this.state = false;
    }
    Formula_1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Formula_1Page');
    };
    Formula_1Page.prototype.reset = function () {
        var self = this;
        setTimeout(function () {
            self.state = false;
        }, 1000);
    };
    Formula_1Page.prototype.screenShot = function () {
        var _this = this;
        this.screenshot.save('jpg', 80).then(function (res) {
            _this.screen = res.filePath;
            _this.state = true;
            _this.reset();
        });
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
            selector: 'page-formula-1',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\formula-1\formula-1.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>นำขยะรีไซเคิลไปจำหน่าย</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="screenShot()">\n\n        <ion-icon name="print"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n  <img src="{{ screen }}" *ngIf="state">\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger">\n\n      <ion-icon name="arrow-dropup"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="about1()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การนำขยะไปแปรรูป</ion-label>\n\n      </button>\n\n      <button ion-fab>\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>นำขยะรีไซเคิลไปจำหน่าย</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula2()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>อนุรักษ์ป่าพื้นที่สีเขียวเดิม</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula3()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การปลูกต้นไม้ใหม่</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula4()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</ion-label>\n\n      </button>\n\n    </ion-fab-list>\n\n\n\n\n\n  </ion-fab>\n\n\n\n\n\n  <iframe src="http://119.59.125.189/isnre2/pages/formula_app2.php" frameborder="0" width="100%" height="100%"></iframe>\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\formula-1\formula-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screenshot__["a" /* Screenshot */]])
    ], Formula_1Page);
    return Formula_1Page;
}());

//# sourceMappingURL=formula-1.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formula_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formula_3_formula_3__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screenshot__ = __webpack_require__(35);
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
    function Formula_2Page(navCtrl, navParams, screenshot) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenshot = screenshot;
        this.state = false;
    }
    Formula_2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Formula_2Page');
    };
    Formula_2Page.prototype.reset = function () {
        var self = this;
        setTimeout(function () {
            self.state = false;
        }, 1000);
    };
    Formula_2Page.prototype.screenShot = function () {
        var _this = this;
        this.screenshot.save('jpg', 80).then(function (res) {
            _this.screen = res.filePath;
            _this.state = true;
            _this.reset();
        });
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
            selector: 'page-formula-2',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\formula-2\formula-2.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>อนุรักษ์ป่าพื้นที่สีเขียวเดิม</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="screenShot()">\n\n        <ion-icon name="print"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n  <img src="{{ screen }}" *ngIf="state">\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger">\n\n      <ion-icon name="arrow-dropup"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="about1()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การนำขยะไปแปรรูป</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula1()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>นำขยะรีไซเคิลไปจำหน่าย</ion-label>\n\n      </button>\n\n      <button ion-fab>\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>อนุรักษ์ป่าพื้นที่สีเขียวเดิม</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula3()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การปลูกต้นไม้ใหม่</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula4()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</ion-label>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n\n\n  <iframe src="http://119.59.125.189/isnre2/pages/formula_app3.php" frameborder="0" width="100%" height="100%"></iframe>\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\formula-2\formula-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screenshot__["a" /* Screenshot */]])
    ], Formula_2Page);
    return Formula_2Page;
}());

//# sourceMappingURL=formula-2.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formula_3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formula_2_formula_2__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formula_4_formula_4__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screenshot__ = __webpack_require__(35);
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
    function Formula_3Page(navCtrl, navParams, screenshot) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenshot = screenshot;
        this.state = false;
    }
    Formula_3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Formula_3Page');
    };
    Formula_3Page.prototype.reset = function () {
        var self = this;
        setTimeout(function () {
            self.state = false;
        }, 1000);
    };
    Formula_3Page.prototype.screenShot = function () {
        var _this = this;
        this.screenshot.save('jpg', 80).then(function (res) {
            _this.screen = res.filePath;
            _this.state = true;
            _this.reset();
        });
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
            selector: 'page-formula-3',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\formula-3\formula-3.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>การปลูกต้นไม้ใหม่</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="screenShot()">\n\n        <ion-icon name="print"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n  <img src="{{ screen }}" *ngIf="state">\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger">\n\n      <ion-icon name="arrow-dropup"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="about1()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การนำขยะไปแปรรูป</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula1()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>นำขยะรีไซเคิลไปจำหน่าย</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula2()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>อนุรักษ์ป่าพื้นที่สีเขียวเดิม</ion-label>\n\n      </button>\n\n      <button ion-fab>\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การปลูกต้นไม้ใหม่</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula4()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</ion-label>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n\n\n  <iframe src="http://119.59.125.189/isnre2/pages/formula_app4.php" frameborder="0" width="100%" height="100%"></iframe>\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\formula-3\formula-3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screenshot__["a" /* Screenshot */]])
    ], Formula_3Page);
    return Formula_3Page;
}());

//# sourceMappingURL=formula-3.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formula_4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formula_1_formula_1__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formula_2_formula_2__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formula_3_formula_3__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screenshot__ = __webpack_require__(35);
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
    function Formula_4Page(navCtrl, navParams, screenshot) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenshot = screenshot;
        this.state = false;
    }
    Formula_4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Formula_4Page');
    };
    Formula_4Page.prototype.reset = function () {
        var self = this;
        setTimeout(function () {
            self.state = false;
        }, 1000);
    };
    Formula_4Page.prototype.screenShot = function () {
        var _this = this;
        this.screenshot.save('jpg', 80).then(function (res) {
            _this.screen = res.filePath;
            _this.state = true;
            _this.reset();
        });
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
            selector: 'page-formula-4',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\formula-4\formula-4.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="screenShot()">\n\n        <ion-icon name="print"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n\n\n  <img src="{{ screen }}" *ngIf="state">\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger">\n\n      <ion-icon name="arrow-dropup"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="about1()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การนำขยะไปแปรรูป</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula1()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>นำขยะรีไซเคิลไปจำหน่าย</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula2()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>อนุรักษ์ป่าพื้นที่สีเขียวเดิม</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="Formula3()">\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การปลูกต้นไม้ใหม่</ion-label>\n\n      </button>\n\n      <button ion-fab>\n\n        <ion-icon name="search"></ion-icon>\n\n        <ion-label>การเปลี่ยนอุปกรณ์ไฟฟ้าแสงสว่าง</ion-label>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n\n\n  <iframe src="http://119.59.125.189/isnre2/pages/formula_app5.php" frameborder="0" width="100%" height="100%"></iframe>\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\formula-4\formula-4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screenshot__["a" /* Screenshot */]])
    ], Formula_4Page);
    return Formula_4Page;
}());

//# sourceMappingURL=formula-4.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(60);
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
    function LocationPage(navCtrl, navParams, view, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.http = http;
        this.initializePro();
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
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
        this.http.get('http://119.59.125.189/service/isnre_amp.php?procode=' + provcode.procode)
            .subscribe(function (res) {
            _this.amps = res;
            //console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
        this.http.get('http://119.59.125.189/service/isnre_prov.php?procode=' + provcode.procode)
            .subscribe(function (res) {
            _this.bbox = [res[0].xmin, res[0].ymin, res[0].xmax, res[0].ymax];
            //console.log(this.bbox);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LocationPage.prototype.initializeTam = function (ampcode) {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_tam.php?ampcode=' + ampcode.ampcode)
            .subscribe(function (res) {
            _this.tams = res;
            //console.log(res);
        }, function (error) {
            console.log("Oooops!");
        });
        this.http.get('http://119.59.125.189/service/isnre_amp.php?ampcode=' + ampcode.ampcode)
            .subscribe(function (res) {
            _this.bbox = [res[0].xmin, res[0].ymin, res[0].xmax, res[0].ymax];
            //console.log(this.bbox);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    LocationPage.prototype.tamExt = function (tamcode) {
        var _this = this;
        this.http.get('http://119.59.125.189/service/isnre_tam.php?tamcode=' + tamcode.tamcode)
            .subscribe(function (res) {
            _this.bbox = [res[0].xmin, res[0].ymin, res[0].xmax, res[0].ymax];
            //console.log(this.bbox);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    // initializeLyr() {
    //   this.http.get('http://119.59.125.189/service/isnre_lyr.php')
    //   .subscribe(res => {
    //     this.lyrs = res;
    //   }, error => {
    //     console.log("Oooops!");
    //   });
    // }
    // itemSelected(item: string) {
    //   let lyr=[];
    //   let lyn=[];
    //   for(let l in this.lyr_ls){
    //     lyr.push(this.lyr_ls[l].lyr); 
    //     lyn.push(this.lyr_ls[l].lyr_desc);     
    //   }
    //   console.log(lyr+'-'+lyn);  
    //   this.dat = {
    //     pro: this.prov_ls,
    //     amp: this.amp_ls,
    //     tam: this.tam_ls,
    //     lyr_ls: this.lyr_ls,
    //     lyr: lyr,
    //     lyn: lyn,
    //     bbox: this.bbox
    //   }
    //   this.navCtrl.setRoot(MapPage, this.dat)
    //   this.view.dismiss(this.dat);
    // }
    LocationPage.prototype.itemSelected = function (item) {
        var locType;
        var locName;
        var locCode;
        if (typeof this.tam_ls !== 'undefined') {
            locType = "tam";
            locName = 'ต.' + this.tam_ls.tam_namt + ' อ.' + this.amp_ls.amp_namt + ' จ.' + this.prov_ls.prov_namt;
            locCode = this.tam_ls.tamcode;
        }
        else if (typeof this.amp_ls !== 'undefined') {
            locType = "amp";
            locName = 'อ.' + this.amp_ls.amp_namt + ' จ.' + this.prov_ls.prov_namt;
            locCode = this.amp_ls.ampcode;
        }
        else if (typeof this.prov_ls !== 'undefined') {
            locType = "pro";
            locName = 'จ.' + this.prov_ls.prov_namt;
            locCode = this.prov_ls.procode;
        }
        else {
            locType = "all";
            locName = "all";
            locCode = "all";
        }
        this.data = {
            locType: locType,
            locName: locName,
            locCode: locCode,
            bbox: this.bbox
        };
        //this.view.dismiss(this.data);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], this.data);
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\location\location.html"*/'<ion-header id="isnre-font">\n\n\n\n  <ion-navbar>\n\n    <ion-title>ค้นหา</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="isnre-font">\n\n  <h4>ค้นหาแบบง่าย (Find)</h4>\n\n  เลือกจังหวัด\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>จังหวัด</ion-label>\n\n      <ion-select [(ngModel)]="prov_ls" multiple="false" interface="action-sheet" (ngModelChange)="initializeAmp($event)">\n\n        <ion-option *ngFor="let pro of pros" [value]="pro">{{pro.prov_namt}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  เลือกอำเภอ\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>อำเภอ</ion-label>\n\n      <ion-select [(ngModel)]="amp_ls" multiple="false" interface="action-sheet" (ngModelChange)="initializeTam($event)">\n\n        <ion-option *ngFor="let amp of amps" [value]="amp">{{amp.amp_namt}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  เลือกตำบล\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>ตำบล</ion-label>\n\n      <ion-select [(ngModel)]="tam_ls" multiple="false" interface="action-sheet" (ngModelChange)="tamExt($event); ">\n\n        <ion-option *ngFor="let tam of tams" [value]="tam">{{tam.tam_namt}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <!-- เลือกชั้นข้อมูล -->\n\n\n\n  <!-- ion-list>\n\n        <ion-item>\n\n            <ion-label>ชั้นข้อมูล</ion-label>\n\n            <ion-select [(ngModel)]="lyr_ls" multiple="true" interface="action-sheet">\n\n                <ion-option *ngFor="let lyr of lyrs" [value] = "lyr">{{lyr.lyr_desc}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n      </ion-list -->\n\n\n\n  <button ion-button (click)="itemSelected()">แสดงแผนที่</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\location\location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_measure_dist_leaflet_measure__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_measure_dist_leaflet_measure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_measure_dist_leaflet_measure__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet_gridlayer_googlemutant__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet_gridlayer_googlemutant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_leaflet_gridlayer_googlemutant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_leaflet_draw_dist_leaflet_draw__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_leaflet_draw_dist_leaflet_draw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_leaflet_draw_dist_leaflet_draw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service_share__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__location_location__ = __webpack_require__(50);
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
    function MapPage(navCtrl, navParams, http, geolocation, modalCtrl, alertCtrl, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.shareService = shareService;
        this.alreadyLyr = [];
        this.alreadyTh = [];
        this.pos2 = [];
        this.usrId = navParams.get('usrId');
        this.locType = navParams.get('locType');
        this.locName = navParams.get('locName');
        this.locCode = navParams.get('locCode');
        this.bbox = navParams.get('bbox');
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        // initial map
        if (typeof this.locType !== 'undefined') {
            this.locFn(this.locType, this.locCode, this.bbox);
        }
        else {
            this.locFn("all", "all", "all");
        }
    };
    MapPage.prototype.ionViewWillEnter = function () {
        //this.loadMap();
    };
    MapPage.prototype.onMapClick = function (e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        return this.showInfo(lat, lng);
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.map('map', {
            center: [13.00, 101.50],
            zoom: 5,
            zoomControl: false,
        });
        var roads = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.gridLayer.googleMutant({
            type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        }).addTo(this.map);
        var satellite = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.gridLayer.googleMutant({
            type: 'satellite' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        });
        var terrain = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.gridLayer.googleMutant({
            type: 'terrain' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        });
        var baseLayers = {
            "แผนที่ถนน": roads,
            "แผนที่ภาพดาวเทียม": satellite,
            "แผนที่ภูมิประเทศ": terrain,
        };
        __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.control.layers(baseLayers, null, { position: 'topleft' }).addTo(this.map);
        //set measure default
        this.measure = false;
        this.circle = false;
        this.info = false;
        //get featureinfo
        //this.map.on('click', this.showInfo);
        this.map.on('click', function (e) {
            // 
            if (_this.state == 'info') {
                _this.onMapClick(e);
            }
            else if (_this.state == 'buffer') {
                _this.showBuffer();
            }
        });
    };
    MapPage.prototype.locFn = function (locType, locCode, bbox) {
        if (locType == 'all') {
            this.alreadyLyr.push('c02_province');
            this.alreadyTh.push('ขอบเขตจังหวัด');
            this.lyr = 'c02_province';
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                zIndex: 5,
                transparent: true
            };
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [7.09056009354302, 104.18985100564],
                [19.7358085431644, 98.6106951024982]
            ]);
        }
        else if (locType == 'tam') {
            this.alreadyLyr.push('c04_subdistrict');
            this.alreadyTh.push('ขอบเขตตำบล');
            this.lyr = 'c04_subdistrict';
            this.cql = 'tamcode=' + locCode;
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                transparent: true,
                zIndex: 5,
                CQL_FILTER: this.cql
            };
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [Number(bbox[1]), Number(bbox[2])],
                [Number(bbox[3]), Number(bbox[0])]
            ]);
        }
        else if (locType == 'amp') {
            this.alreadyLyr.push('c03_district');
            this.alreadyTh.push('ขอบเขตอำเภอ');
            this.lyr = 'c03_district';
            this.cql = 'ampcode=' + locCode;
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                transparent: true,
                zIndex: 5,
                CQL_FILTER: this.cql
            };
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [Number(bbox[1]), Number(bbox[2])],
                [Number(bbox[3]), Number(bbox[0])]
            ]);
        }
        else if (locType == 'pro') {
            this.alreadyLyr.push('c02_province');
            this.alreadyTh.push('ขอบเขตจังหวัด');
            this.lyr = 'c02_province';
            this.cql = 'procode=' + locCode;
            this.mapOtp = {
                layers: 'isnre:' + this.lyr,
                format: 'image/png',
                transparent: true,
                zIndex: 5,
                CQL_FILTER: this.cql
            };
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
            this.map.fitBounds([
                [Number(bbox[1]), Number(bbox[2])],
                [Number(bbox[3]), Number(bbox[0])]
            ]);
        }
    };
    MapPage.prototype.lyrFn = function (lyr_ls) {
        //list layers
        this.map.eachLayer(function (l) {
            if (l instanceof __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.TileLayer.WMS) {
                l.remove();
            }
        });
        //add layer
        for (var ls in lyr_ls) {
            this.lyr = lyr_ls[ls];
            if (typeof this.locType == 'undefined') {
                this.mapOtp = {
                    layers: 'isnre:' + this.lyr,
                    format: 'image/png',
                    zIndex: 5,
                    transparent: true
                };
            }
            else {
                this.mapOtp = {
                    layers: 'isnre:' + this.lyr,
                    format: 'image/png',
                    transparent: true,
                    zIndex: 5,
                    CQL_FILTER: this.cql
                };
            }
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer.wms("http://119.59.125.189/geoserver/ows?", this.mapOtp).addTo(this.map);
        }
    };
    MapPage.prototype.addMeasure = function () {
        var options = {
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            activeColor: '#ff7700',
            completedColor: '#ff0000',
            someNewUnit: {
                factor: 1600,
                display: 'rai',
                decimals: 2 // Number of decimals to round results when using this unit. `0` is the default value if not specified.
            },
            myOtherNewUnit: {
                factor: 1234,
                display: 'My Other Unit',
                decimals: 0
            }
        };
        if (this.measure == false) {
            this.control = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.control.measure(options).addTo(this.map);
            this.measure = true;
        }
        else {
            this.measure = false;
            this.map.removeControl(this.control);
        }
    };
    MapPage.prototype.addLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (res) {
            _this.pos = [res.coords.latitude, res.coords.longitude];
            _this.map.setView(_this.pos, 16);
            _this.marker = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker(_this.pos, { draggable: true }).addTo(_this.map).bindPopup("ตำแหน่งของคุณ").openPopup();
            console.log(_this.pos);
            // drage marker
            _this.marker.on("dragend", function (e) {
                console.log([e.target._latlng.lat, e.target._latlng.lng]);
            });
        });
    };
    MapPage.prototype.addSelectarea = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__location_location__["a" /* LocationPage */], {});
    };
    MapPage.prototype.addLayer = function () {
        var _this = this;
        var modelLyr = this.modalCtrl.create('LayerPage', {
            alreadyLyr: this.alreadyLyr,
            alreadyTh: this.alreadyTh
        });
        modelLyr.present();
        //call lyrFn when onDidDismiss
        modelLyr.onDidDismiss(function (data) {
            _this.alreadyLyr = data.lyr_ls;
            _this.alreadyTh = data.lyr_th;
            //load array layer to map
            _this.lyrFn(_this.alreadyLyr);
        });
    };
    MapPage.prototype.addLegend = function () {
        var modalLeg = this.modalCtrl.create('LegendPage', {
            alreadyLyr: this.alreadyLyr,
            alreadyTh: this.alreadyTh
        });
        modalLeg.present();
    };
    MapPage.prototype.addData = function () {
        if (typeof this.pos == 'undefined') {
            var alert_1 = this.alertCtrl.create({
                //title: 'คุณยังไม่ได้ระบุตำแหน่ง!',
                subTitle: 'กรุณากดที่ปุ่ม "ตำแหน่งปัจจุบัน" และขยับ marker ไปยังตำแหน่งที่ต้องการก่อนเพิ่มข้อมูล',
                buttons: ['ตกลง']
            });
            alert_1.present();
        }
        else {
            var modalAdd = this.modalCtrl.create('AddDataPage', {
                pos: this.marker.getLatLng(),
                usrId: this.usrId
            });
            modalAdd.present();
            //console.log(this.pos);
        }
    };
    MapPage.prototype.enableInfo = function () {
        if (this.info == false) {
            this.state = 'info';
            this.info = true;
        }
        else {
            this.state = '';
            this.info = false;
        }
    };
    MapPage.prototype.showInfo = function (lat, lng) {
        //this.shareService.setUserData(e);
        var modalLeg = this.modalCtrl.create('InfoPage', {
            lat: lat,
            lng: lng,
            alreadyLyr: this.alreadyLyr,
            alreadyTh: this.alreadyTh
        });
        modalLeg.present();
    };
    MapPage.prototype.showBuffer = function () {
        var _this = this;
        console.log('buffer');
        this.drawnItems = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.featureGroup().addTo(this.map);
        var options = {
            position: 'topleft',
            draw: {
                polyline: false,
                polygon: false,
                circle: true,
                rectangle: false,
                marker: false,
                circlemarker: false
            },
            edit: {
                featureGroup: this.drawnItems,
                remove: true
            }
        };
        if (this.circle == false) {
            // this.circleControl = L.control.measure(options).addTo(this.map);
            this.drawControl = new __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.Control.Draw(options);
            this.map.addControl(this.drawControl);
            this.circle = true;
            this.map.on(__WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.Draw.Event.CREATED, function (e) {
                var layer = e.layer;
                _this.drawnItems.addLayer(layer);
            });
        }
        else {
            //L.Control.remove()
            this.circle = false;
            this.map.removeControl(this.drawControl);
        }
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-map',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\map\map.html"*/'<ion-header>\n\n\n\n  <ion-navbar id="isnre-font">\n\n    <ion-title>แผนที่</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content id="isnre-font">\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="danger">\n\n      <ion-icon name="arrow-dropup"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="showBuffer()">\n\n        <ion-icon name="radio-button-off" color="red"></ion-icon>\n\n        <ion-label>buffering</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="addSelectarea()">\n\n        <ion-icon name="search" color="green"></ion-icon>\n\n        <ion-label>ค้นหา</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="addLayer()">\n\n        <ion-icon name="logo-buffer" color="green"></ion-icon>\n\n        <ion-label>ชั้นข้อมูล</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="addLegend()">\n\n        <ion-icon name="bowtie" color="green"></ion-icon>\n\n        <ion-label>สัญลักษณ์</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="addMeasure()">\n\n        <ion-icon name="git-pull-request" color="green"></ion-icon>\n\n        <ion-label>เครื่องมือวัด</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="addLocation()">\n\n        <ion-icon name="locate" color="blue"></ion-icon>\n\n        <ion-label>ตำแหน่งปัจจุบัน</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="addData()">\n\n        <ion-icon name="pin" color="red"></ion-icon>\n\n        <ion-label>เพิ่มข้อมูล</ion-label>\n\n      </button>\n\n      <button ion-fab (click)="enableInfo()">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n        <ion-label>Popup info</ion-label>\n\n      </button>\n\n\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <div id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\map\map.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_service_share__["a" /* ShareService */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_share__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { TabsPage } from '../tabs/tabs';
//import { MapPage } from '../map/map';
var WelcomePage = (function () {
    function WelcomePage(fb, navCtrl, loadingCtrl, alertCtrl, modalCtrl, http, shareService, events) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.shareService = shareService;
        this.events = events;
        this.email_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.pass_user = fb.control('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required);
        this.reportForm = fb.group({
            'email_user': this.email_user,
            'pass_user': this.pass_user
        });
    }
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage.prototype.submit = function () {
        var _this = this;
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
            _this.res = res;
            console.log(res);
            if (_this.res.message == 'error') {
                loader.dismiss();
                var alert_1 = _this.alertCtrl.create({
                    title: 'E-Mail หรือรหัสผ่านของท่านไม่ถูกต้อง!',
                    subTitle: 'กรุณาลองอีกครั้ง หรือสมัครสมาชิกใหม่',
                    buttons: ['ok']
                });
                alert_1.present();
            }
            else if (_this.res.message == 'success') {
                loader.dismiss();
                _this.gotoindex();
            }
        }, function (error) {
            console.log("Oooops!");
            loader.dismiss();
        });
    };
    WelcomePage.prototype.gotoindex = function () {
        // Sharing data using service
        this.shareService.setUserData(this.res);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
    };
    WelcomePage.prototype.gotoForgot = function () {
        var modalLeg = this.modalCtrl.create('ForgetPage');
        modalLeg.present();
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\_dev_prod\isnre2-android\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding id="welcome" default-background  id="isnre-font">\n\n	<p text-center>\n\n	<img src="assets/imgs/logo2.png">\n\n	</p>\n\n	\n\n<form novalidate [formGroup]="reportForm" >\n\n	<div class="form">\n\n		<ion-list>\n\n		  <ion-item>\n\n		    <ion-input type="email" formControlName="email_user" placeholder="Username" required></ion-input>\n\n		  </ion-item>\n\n\n\n		  <ion-item>\n\n		    <ion-input type="password" formControlName="pass_user" placeholder="Password" required></ion-input>\n\n		  </ion-item>\n\n\n\n		</ion-list> <!-- [disabled]="!reportForm.valid" -->\n\n		<button ion-button block color="light"  type="submit" (click)="submit()">เข้าสู่ระบบ</button>\n\n		<button ion-button block class="marginTop" (click)="signup()">สมัครสมาชิก</button>\n\n		<!-- <button ion-button block class="marginTop" (click)="signup()">ลืมรหัสผ่าน</button> -->\n\n		<button ion-button block color="light" clear (click)="gotoForgot()">ลืมรหัสผ่าน</button>\n\n	</div>\n\n</form>	\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\_dev_prod\isnre2-android\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_share__["a" /* ShareService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map