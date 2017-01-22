import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})

export class ScanPage {

  title: string = "Formulario de Pago";
  pay: any;
  barcodeData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.barcodeData = "";                                          
    this.pay= {};
  }

  
  ionViewDidLoad() {
    BarcodeScanner.scan()
      .then((result) => {
        if (!result.cancelled) {
          this.barcodeData = result.text;
        }
        })
      .catch((err) => {
        alert("error");
        alert(err);
      })
  }

  payAction(event){
    if(confirm("Desea guardar datos de pago en su dispositivo?")){
      
      this.savePaymentData();
    }

  }

  savePaymentData(){
    this.storage.set("pay",this.pay);
  }

}
