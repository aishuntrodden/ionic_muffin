import { WelcomePage } from './../welcome/welcome';
import { GetloginProvider } from './../../providers/getlogin/getlogin';
import { Component, OnInit } from '@angular/core';
import { NavController, } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  welcome = WelcomePage;
  data: any;
  response: any;
  body: any;
  ngOnOnit() {


  }
  constructor(public navCtrl: NavController, private GetloginService: GetloginProvider) {

  }
  ionViewWillEnter() {


  }
  ionViewWillLeave() {

    this.loadComments();
    // this.abc();


  }

  loadComments() {

    // Get all comments
    this.GetloginService.getComments()
      .subscribe(
      data => { this.data = data; }, //Bind to view

      err => {
        // Log errors if any
        console.log(err);
      });
    this.body = {
      email: this.data.email,
      id_token: this.data.auth.params.id_token,
      name: this.data.name.givenName,
      provider: this.data.provider,
      uid: this.data.id,
      token_type: this.data.auth.params.token_type,
      oauth_expires_at: this.data.auth.params.expires_at,
      expires_in: this.data.auth.params.expires_in,
      display_name: this.data.name.givenName,
      oauth_token: this.data.auth.params.access_token,
      photo_url: this.data.photos[0].value,
      refresh_token: this.data.auth.refreshToken,
      email_to: "aishwary.athlete@gmail.com",
      body: "Hitt this mail",
      subject: "This is test mail",
      to: "mayankchandelchat@gmail.com"

    };

  }
  abc() {
    console.log(this.body);
  }
  send() {
    this.loadComments();
    window.location.href = 'http://ec2-54-198-217-196.compute-1.amazonaws.com:8000/authe';

  }
  a() {
    this.navCtrl.push(WelcomePage);
  }

}
