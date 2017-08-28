import { WelcomePage } from './../welcome/welcome';
import { GetloginProvider } from './../../providers/getlogin/getlogin';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  welcome = WelcomePage;
  constructor(public navCtrl: NavController, public GetloginService: GetloginProvider) {

  }
  ionViewDidLoad() {
    this.GetloginService.getRemoteData();
  }
  send() {
    window.location.href = 'http://ec2-54-198-217-196.compute-1.amazonaws.com:8000/authe';


  }

}
