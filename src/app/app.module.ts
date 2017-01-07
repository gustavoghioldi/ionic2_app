import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Page1 } from '../pages/page1/page1';
import { Categorias } from '../pages/categorias/categorias';
import { Beneficios } from '../pages/beneficios/beneficios';
import { Credencial } from '../pages/credencial/credencial';
import { Contacto } from '../pages/contacto/contacto';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Categorias,
    Beneficios,
    Credencial,
    Contacto
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
    Contacto
  ],
  providers: [Storage, Data, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}