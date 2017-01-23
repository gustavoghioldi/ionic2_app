import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PaymentPage Page');
  }

  click() {
BarcodeScanner.scan()
        .then((result) => {
            if (!result.cancelled) {
                const barcodeData = new BarcodeData(result.text, result.format);
                console.log(barcodeData);
        }
    })
        .catch((err) => {
          alert(err);
        })
    }

}

export class BarcodeData {
  constructor(
    public text: String,
    public format: String
  ) {}
}