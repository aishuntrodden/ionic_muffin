import { ChatPage } from './../chat/chat';
import { WelcomePage } from './../welcome/welcome';
import { GetloginProvider } from './../../providers/getlogin/getlogin';
import { Component, OnInit } from '@angular/core';
import { NavController, } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  welcome = WelcomePage;
  chat = ChatPage;
  results: any
  ngOnOnit() {


  }
  constructor(public navCtrl: NavController, private GetloginService: GetloginProvider, private alertCtrl: AlertController) {

  }
  send() {
    window.location.href = 'http://ec2-54-198-217-196.compute-1.amazonaws.com:8000/authe';

  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login',

      buttons: ['Dismiss']
    });
    alert.present();
    window.location.href = 'http://ec2-52-39-241-144.us-west-2.compute.amazonaws.com:9000//authe';
    this.ionViewWillLeave();
  }
  ionViewWillEnter() {
    this.loadComments();

  }
  ionViewWillLeave() {


    // this.abc();


  }
  public data: any;
  response: any;
  body: any;
  loadComments() {

    this.GetloginService.getComments()
      .subscribe(
      data => {
        this.data = data;
        this.set(this.data);
        // console.log(this.data);
      }, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });


  }
  abc() {
    console.log(this.body);
  }
  a() {
    this.navCtrl.push(WelcomePage);
  }
  set(data) {
    this.body = {
      email: data.email,
      id_token: data.auth.params.id_token,
      name: data.name.givenName,
      provider: data.provider,
      uid: data.id,
      token_type: data.auth.params.token_type,
      oauth_expires_at: data.auth.params.expires_at,
      expires_in: data.auth.params.expires_in,
      display_name: data.name.givenName,
      oauth_token: data.auth.params.access_token,
      photo_url: data.photos[0].value,
      refresh_token: data.auth.refreshToken,
      email_to: "aishwary.athlete@gmail.com",
      body: "Hitt this mail",
      subject: "This is test mail",
      to: "mayankchandelchat@gmail.com"

    };
    console.log(this.body);
    this.logincheck();
  }
  logincheck() {
    if (this.body.email) {
      this.send();
    }
  }
}
