import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  title: string = "Formulario de Pago";
  card_number: number;
  name: string;
  barcodeData: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.barcodeData = navParams.get('details');
  }

  
  ionViewDidLoad() {
    console.log('Hello ScanPage Page');
  }

}
