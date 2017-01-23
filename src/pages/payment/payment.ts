import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
/*
  Generated class for the Payment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class Payment {

  title: string = "Formulario de Pago";
  pay: any;
  paymentMethods: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.pay={};
    storage.get('payment_methods').then((val)=>{
      if(val){
        this.paymentMethods = val;
      } else {
        this.paymentMethods = {};
      }
    
  });
  }

  addPaymentMethod(){
    this.paymentMethods.push(this.pay);
    this.storage.set('payment_methods', this.paymentMethods);
  }
}

