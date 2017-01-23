import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Contacto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html'
})
export class Contacto {

  title: string = "Formulario de contacto";
  contact_to: string;
  motivo: string;
  description: string;
  public message = [];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ContactoPage Page');
  }

  saveItem()
  {
   
  }

   
    


  

}
