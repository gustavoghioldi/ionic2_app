import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Payment } from '../payment/payment';
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

  constructor(public navCtrl: NavController, public dataService: Data) {}

  ionViewDidLoad() {
    console.log('Hello ContactoPage Page');
  }

  saveItem()
  {
    let newMessage = {
      motivo: this.motivo,
      description : this.description
    }

    this.dataService.getData('todos').then((todos)=>{
      if(todos){
        console.log(todos);
        this.message.push(newMessage);
        console.log(this.message);
        this.dataService.save('todos', this.message);
      }
    });
    


  }

  toPayment(){
    this.navCtrl.push(Payment, {});
  }
}
