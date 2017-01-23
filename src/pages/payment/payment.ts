import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'
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
  title: string = "Medios de Pago";
  paymentMethods : any;
  
  constructor(public navCtrl: NavController, storage: Storage) {
    //storage.clear();
    //storage.set('payment_methods', [{name:"metodo de pago 1"}, {name:"metodo de pago 2"}]);
    storage.get('payment_methods').then((val) => {
      if(val==null){
        this.paymentMethods = [];
      } else {
        this.paymentMethods = val;
      }
     })
  }

  ionViewDidLoad() {
    console.log('Hello PaymentPage Page');
  }

}