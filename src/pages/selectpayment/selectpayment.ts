import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Paymentform } from "../paymentform/paymentform";
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
  title: string= 'Selección de Medio de Pago';
  benefit: any;
  paymentMethods: any;
  document : string = "benefit_payment_methods";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.benefit= this.navParams.get('item');
    storage.get(this.document).then((val)=>{
      
      if(val==null){
            this.paymentMethods = [];     
          } else {
            this.paymentMethods = val;
          }

      console.log(this.paymentMethods);
      });
  }

  pay(creditCard){
    this.navCtrl.push(Paymentform, {creditCard: creditCard, benfit: this.benefit});
  }

  ionViewDidLoad() {
    console.log('Hello SelectpaymentPage Page');
  }


}
