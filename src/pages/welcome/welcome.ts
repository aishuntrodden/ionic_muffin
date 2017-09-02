import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgIf } from '@angular/common';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  time: any;
  timeMin: any = 100;
  timeMax: any = 200;
  timeMin2: any;
  timeMax2: any;
  ctlower: any
  ctupper: any;
  knobValues: { lower: number, upper: number } = {
    upper: 18,
    lower: 0
  }
  if(knobValues) {

  }
  dualValue2: [{ lower: 18, Upper: 30 }, { lower: 66, Upper: 99 }]




  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.timeMin2 = this.timeMin;
    this.timeMax2 = this.timeMax;

  }

  setBadge(time) {
    this.timeMin2 = time.lower;
    this.timeMax2 = time.upper;
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad WelcomePage');
  }

}
