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

    dataScan: any;

  constructor(public navCtrl: NavController) {
      BarcodeScanner.scan()
        .then((result) => {
            if (!result.cancelled) {
                this.dataScan = (result.text);
        }
    })
        .catch((err) => {
          alert((err));
          console.log(err);
        })
    }
  

  ionViewDidLoad() {

  }

}