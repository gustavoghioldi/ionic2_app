import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CategoriesService } from '../../providers/categories-service';
import { Beneficios } from '../beneficios/beneficios';

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
  providers: [CategoriesService]
})


export class Categorias {
  title : string = "Categorías";

  categories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriesService: CategoriesService) {
    this.loadCategories();
  }

  

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Beneficios, {
      item: item
    });
  }

   loadCategories(){
    this.categoriesService.load()
    .then(data => {
      this.categories = data;
    });
  }
}
