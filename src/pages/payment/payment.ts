import { Component } from '@angular/core';
import { NavController, ViewController, NavParams} from 'ionic-angular';
import { Paymentmethods } from '../paymentmethods/paymentmethods';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class Payment {

  pay: any;
  paymentMethods: any;
  document : string = "benefit_payment_methods";
  
  constructor(public params: NavParams, public navCtrl: NavController, public viewController: ViewController ,public storage: Storage) {
    this.pay={};
    this.paymentMethods = params.get('payments');
    console.log(this.paymentMethods);
  }

  savePaymentMethod(){
    console.log(this.pay);
    this.paymentMethods.push(this.pay);
    this.storage.set(this.document , this.paymentMethods);
    this.viewController.dismiss();
    this.navCtrl.push(Paymentmethods);
  }

  cancelModal(){
    this.viewController.dismiss();
  }

}

