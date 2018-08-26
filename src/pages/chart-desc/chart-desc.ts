import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-chart-desc',
  templateUrl: 'chart-desc.html',
})
export class ChartDescPage {

  public pros: any;
  public prov_ls: any;
  public forest: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
  }

  ionViewDidLoad() {
    this.initializePro();
  }

  initializePro() {
    this.http.get('http://119.59.125.189/service/isnre_prov.php')
      .subscribe(res => {
        this.pros = res;
      }, error => {
        console.log(error);
      });
  }

  showData(e: any) {
    console.log(e);
    console.log(this.prov_ls);

    this.http.get('http://119.59.125.189/service/isnre_forest_report.php?prov_code=' + this.prov_ls.procode)
      .subscribe(res => {
        this.forest = res;
        console.log(res)
      }, error => {
        console.log(error)
      })
  }

}
