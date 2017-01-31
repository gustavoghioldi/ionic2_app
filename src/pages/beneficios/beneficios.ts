import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Beneficio } from '../beneficio/beneficio';
import { BenefitsService } from '../../providers/benefits-service';

@Component({
  selector: 'page-beneficios',
  templateUrl: 'beneficios.html',
  providers: [BenefitsService]

})
export class Beneficios {
  selectedItem: any;
  title: string = "Beneficios";
  benefits: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public modalController: ModalController) {
    //this.loadBenefits();
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem);
  }

  ionViewDidLoad() {
    console.log('Hello BeneficiosPage Page');
  }

  itemTapped(event, item) {
      
      this.navCtrl.push(Beneficio, {
      item: item
    });
  }

}
