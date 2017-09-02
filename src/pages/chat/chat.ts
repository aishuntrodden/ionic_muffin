import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  options: any
  constructor(public navCtrl: NavController, public navParams: NavParams, private speechRecognition: SpeechRecognition) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  start() {
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available))



    this.speechRecognition.startListening(this.options)
      .subscribe(
      (matches: Array<string>) => console.log(matches),
      (onerror) => console.log('error:', onerror)
      )

    // Stop the recognition process (iOS only)
    this.speechRecognition.stopListening()

    // Get the list of supported languages
    this.speechRecognition.getSupportedLanguages()
      .then(
      (languages: Array<string>) => console.log(languages),
      (error) => console.log(error)
      )

    // Check permission
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => console.log(hasPermission))

    // Request permissions
    this.speechRecognition.requestPermission()
      .then(
      () => console.log('Granted'),
      () => console.log('Denied')
      )












  }












}
