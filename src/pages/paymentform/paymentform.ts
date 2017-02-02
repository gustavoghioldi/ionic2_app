import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController} from 'ionic-angular';
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
  creditCard: any;
  selectedItem: any;

  document : string = "benefit_payment_buy";
  
  constructor(private alertCtrl: AlertController, public params: NavParams, public navCtrl: NavController, public viewController: ViewController ,public storage: Storage) {
    this.creditCard = this.params.get('creditCard');  
    this.selectedItem = params.get('benefit');
    
  }

  closePaymentForm(){
        this.viewController.dismiss();
  }

  payNow(){
    let ccv= this.presentPrompt();
    console.log(ccv);
  }

  presentPrompt() {
  let alert = this.alertCtrl.create({
    title: 'Ultimo paso',
    inputs: [
      {
        name: 'CVV',
        placeholder: 'CVV'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Confirmar Pago'
      }
    ]
  });
  alert.present();
}
  

}
