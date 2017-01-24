import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class Payment {

  title: string = "Formulario de Pago";
  pay: any;
  paymentMethods: any;
  document : string = "benefit_payment_methods";
  
  constructor(public navCtrl: NavController, public viewController: ViewController ,public storage: Storage) {
    this.pay={};
    
  }

  savePaymentMethod(){
    //this.paymentMethods.push(this.pay);
    //this.storage.set(this.document , this.paymentMethods);
    this.viewController.dismiss();

  }



}

