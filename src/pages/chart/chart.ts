import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import Highcharts from 'highcharts';

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  public pros: any; 
  public amps: any; 
  public tams: any; 
   
  public prov_ls: any; 
  public amp_ls:any; 
  public tam_ls:any; 
  public lyr_ls:any;
  public chartData: any;

  public lyr_sel: any = 'c29_nrf';
  public loc_sel: any = 'all';
  public loc_code: any = 'all';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private loadingCtrl : LoadingController,
    public view: ViewController,
    public http: HttpClient
  ) {
    this.initializePro();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ChartPage');
    this.initializeType();
    this.hchart(this.lyr_sel, this.loc_sel, this.loc_code); 
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  initializeType() {
    this.lyr_ls=[{
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
    }]
  }

  selLyr(lyr_sel: any){
    this.lyr_sel=lyr_sel;    
    this.hchart(this.lyr_sel, this.loc_sel, this.loc_code);    
  }

  initializePro() {
    this.http.get('http://119.59.125.189/service/isnre_prov.php')
    .subscribe(res => {
      this.pros = res; 
    }, error => {
      console.log("Oooops!");
    });
  }

  initializeAmp(provcode: any) {
    //console.log(provcode.procode);
    this.loc_sel="pro";
    this.loc_code = provcode.procode;
    this.http.get('http://119.59.125.189/service/isnre_amp.php?procode='+provcode.procode)
    .subscribe(res => {
      this.amps = res;
      this.hchart(this.lyr_sel, this.loc_sel, this.loc_code);  
    }, error => {
      console.log("Oooops!");
    });
  }

  initializeTam(ampcode: any) {
    this.loc_sel="amp";
    this.loc_code = ampcode.ampcode;
    this.http.get('http://119.59.125.189/service/isnre_tam.php?ampcode='+ampcode.ampcode)
    .subscribe(res => {
      //this.tams = res;
      this.hchart(this.lyr_sel, this.loc_sel, this.loc_code); 
    }, error => {
      console.log("Oooops!");
    });
  }

  hchart(lyr_sel:any, loc_sel:any, loc_code:any){   
    let loader = this.loadingCtrl.create({content: "กำลังเรียกดูข้อมูล.."}); 
    loader.present(); 
    let lyr_desc;
    if(lyr_sel=='c33_nhw'){
      lyr_desc = "เขตห้ามล่าสัตว์ป่า";
    }else if(lyr_sel=='c30_nprk'){
      lyr_desc = "อุทยานแห่งชาติ";
    }else if(lyr_sel=='c31_fprk'){
      lyr_desc = "วนอุทยาน";
    }else if(lyr_sel=='c32_wldsshp'){
      lyr_desc = "เขตรักษาพันธุ์สัตว์ป่า";
    }else{
      lyr_desc = "ป่าสงวนแห่งชาติ";
    }
    
    // load from web
    this.http.get('http://119.59.125.189/service/isnre_forest_chart.php?lyr_sel='+lyr_sel+'&loc_sel='+loc_sel+'&loc_code='+loc_code)
    .subscribe(res => {
      this.chartData = res;
      //console.log('web',this.chartData);
    }, error => {
      console.log("Oooops!");
    });  
    
    Highcharts.setOptions({
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      }
    });

    setTimeout(() => {
      loader.dismiss();
      Highcharts.chart('chart', {
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
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'เนื้อที่ป่า',
            colorByPoint: true,
            //data: this.chartData
            data: this.chartData
        }],
        credits: {
          enabled: false
        },
      });
    }, 1000);


  }

}
