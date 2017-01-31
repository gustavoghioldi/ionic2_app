import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Page1 } from '../pages/page1/page1';
import { Categorias } from '../pages/categorias/categorias';
import { Beneficios } from '../pages/beneficios/beneficios';
import { Credencial } from '../pages/credencial/credencial';
import { Contacto } from '../pages/contacto/contacto';
import { Payment } from '../pages/payment/payment';
import { Paymentmethods } from '../pages/paymentmethods/paymentmethods';
import { Paymentform } from '../pages/paymentform/paymentform';
import { Scan } from '../pages/scan/scan';
import { Beneficio } from '../pages/beneficio/beneficio';
import { Selectpayment } from '../pages/selectpayment/selectpayment';

import { Storage } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    Page1,
    Categorias,
    Beneficios,
    Credencial,
    Contacto,
    Payment,
    Scan,
    Paymentmethods,
    Paymentform,
    Beneficio,
    Selectpayment
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Categorias,
    Beneficios,
    Credencial,
    Contacto,
    Payment,
    Scan,
    Paymentmethods,
    Paymentform,
    Beneficio,
    Selectpayment
  ],
  providers: [Storage,  {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
