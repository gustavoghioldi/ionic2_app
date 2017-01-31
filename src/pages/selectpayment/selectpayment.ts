import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Selectpayment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-selectpayment',
  templateUrl: 'selectpayment.html'
})
export class Selectpayment {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SelectpaymentPage Page');
  }

}
