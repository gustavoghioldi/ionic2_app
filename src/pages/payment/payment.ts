import { Component } from '@angular/core';
import { NavController, ViewController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class Payment {

  title: string = "Agregar Medio de Pago";
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
  }

  closePaymentMethod(){
        this.viewController.dismiss();
  }


}

