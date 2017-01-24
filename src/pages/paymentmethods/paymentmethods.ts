import { Component } from '@angular/core';
import { NavController , ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Payment } from '../payment/payment';


/*
  Generated class for the Paymentmethods page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-paymentmethods',
  templateUrl: 'paymentmethods.html'
})

export class Paymentmethods {
  
  title: string="Medios de Pago";
  paymentMethods: any;
  document : string = "benefit_payment_methods";

  constructor(public navCtrl: NavController, public modalController: ModalController, storage: Storage) {
      storage.get(this.document).then((val)=>{
      
      if(val==null){
            this.paymentMethods = [];     
          } else {
            this.paymentMethods = val;
          }
      });
  }

  addPaymentMethod()
  {
      let modal = this.modalController.create(Payment);
      modal.present();
  }

  ionViewDidLoad() {
    console.log('Hello PaymentmethodsPage Page');
  }

}
