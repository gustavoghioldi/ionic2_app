import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Credencial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-credencial',
  templateUrl: 'credencial.html'
})
export class Credencial {

  title : string = "Credencial Virtual";

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CredencialPage Page');
  }

}
