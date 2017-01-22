import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  title: string = "Formulario de Pago";
  
  card_number: number;
  name: string;
  year: number;
  month: number;
  dni_type: string;
  dni: number;
  emil: string;

  barcodeData: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.barcodeData = "";                                          
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

  pay(){
    alert("Acá el pago");
    confirm("Desea guardar datos de pago en su dispositivo?");
    
  }

}
