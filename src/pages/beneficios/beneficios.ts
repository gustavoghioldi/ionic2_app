import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public benefitsService: BenefitsService) {
    this.loadBenefits();
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('Hello BeneficiosPage Page');
  }

  loadBenefits(){
    this.benefitsService.load()
    .then(data => {
      this.benefits = data;
    });
  }

}
