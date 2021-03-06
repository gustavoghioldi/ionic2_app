import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Categorias } from '../pages/categorias/categorias';
import { Credencial } from '../pages/credencial/credencial';
import { Contacto } from '../pages/contacto/contacto';
import { Scan } from '../pages/scan/scan';
import { Paymentmethods } from '../pages/paymentmethods/paymentmethods';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, storage: Storage) {
    this.initializeApp();
    //storage.clear();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Page1 },
      { title: 'Categorías', component: Categorias },
      { title: 'Credencial Virtual', component: Credencial},
      { title: 'Contacto', component: Contacto},
      { title: 'Scan', component: Scan},
      { title: 'Medios de Pago', component: Paymentmethods}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
