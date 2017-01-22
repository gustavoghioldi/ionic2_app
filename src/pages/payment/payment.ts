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

  constructor(public navCtrl: NavController, storage: Storage) {
    storage.set("clave", {hola:"Gustssssavo"});
    storage.get("clave").then((val) => {
       console.log('Your name is', val);
    });
     
  }

  ionViewDidLoad() {
    console.log('Hello PaymentPage Page');
    
}

}