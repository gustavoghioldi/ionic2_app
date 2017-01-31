import { Component } from '@angular/core';
import { NavController , ModalController} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import { Paymentform } from '../paymentform/paymentform';

/*
  Generated class for the Payment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class Scan {

    dataScan: any;

  constructor(public navCtrl: NavController, public modalController: ModalController) {
      BarcodeScanner.scan()
        .then((result) => {
            if (!result.cancelled) {
                this.dataScan = (result.text);

        }
    })
        .catch((err) => {
          this.bay("ss", "sas");
        })
    }
  

  ionViewDidLoad() {

  }

  bay(event, item) {
      let modal = this.modalController.create(Paymentform, { payments: []} );
      modal.present();
  }

}