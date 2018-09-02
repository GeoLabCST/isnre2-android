import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-buffer',
  templateUrl: 'buffer.html',
})
export class BufferPage {

  public alreadyLyr: any;
  public alreadyTh: any;
  public lyrs: any;
  public lyr_ls = [];
  public lyr_th = [];


  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    this.alreadyLyr = navParams.get('alreadyLyr');
    this.alreadyTh = navParams.get('alreadyTh');
    this.initLyr();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LayerPage');
  }

  initLyr() {

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

    for (let l in this.lyrs) {
      for (let a in this.alreadyLyr) {
        if (this.lyrs[l].lyr == this.alreadyLyr[a]) {
          this.lyrs[l]['checked'].push(1);
        }
      }
    }
    this.initLyrArr();
  }

  initLyrArr() {
    //load alreadyLyr to array
    for (let l in this.alreadyLyr) {
      this.lyr_ls.push(this.alreadyLyr[l]);
    }
    //load lyr_ls to array
    for (let t in this.alreadyTh) {
      this.lyr_th.push(this.alreadyTh[t]);
    }
  }

  onChange(lyr, lyr_th, isChecked, index) {

    if (isChecked) {
      this.lyr_ls.push(lyr);
      this.lyr_th.push(lyr_th);
    } else {
      this.lyr_ls.splice(this.lyr_ls.indexOf(lyr), 1)
      this.lyr_th.splice(this.lyr_th.indexOf(lyr_th), 1)
    }
    //console.log(this.lyr_ls);
  }

  lyrSelected() {
    const data = {
      lyr_ls: this.lyr_ls,
      lyr_th: this.lyr_th
    }
    this.viewCtrl.dismiss(data);
  }

}
