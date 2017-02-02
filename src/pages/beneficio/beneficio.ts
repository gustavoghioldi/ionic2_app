import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BenefitsService } from '../../providers/benefits-service';
import { Selectpayment } from '../selectpayment/selectpayment';
/*
  Generated class for the Beneficio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-beneficio',
  templateUrl: 'beneficio.html',
  providers: [BenefitsService]
})
export class Beneficio {
  selectedItem: any;
  benefit: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public benefitsService: BenefitsService) {
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem.id);
    this.loadBenefit(this.selectedItem.id);
  }

  ionViewDidLoad() {
    console.log('Hello BeneficioPage Page');
  }

  loadBenefit(id){
    this.benefitsService.load(id)
    .then(data => {
      console.log(data);
      this.benefit = data;
    });
  }

  selectPayment(event, item){
    console.log(item);
    this.navCtrl.push(Selectpayment, {item: item});
  }

}
