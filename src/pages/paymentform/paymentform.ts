import { Component } from '@angular/core';
import { NavController, ViewController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Paymentform page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-paymentform',
  templateUrl: 'paymentform.html'
})
export class Paymentform {

  title: string = "Formulario de Pagos";
  pay: any;
  selectedItem: any;

  document : string = "benefit_payment_buy";
  
  constructor(public params: NavParams, public navCtrl: NavController, public viewController: ViewController ,public storage: Storage) {
    this.pay={}; 
    this.selectedItem = params.get('item');
    console.log(this.selectedItem);
  }

  closePaymentForm(){
        this.viewController.dismiss();
  }

  payNow(){
    alert("su pago ha sido realizado con exito!!!");
  }
  

}
