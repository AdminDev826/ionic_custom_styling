import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ColetasPage } from '../pages/coletas/coletas';
import { TabsPage } from '../pages/tabs/tabs';
import { NotasPage } from "../pages/notas/notas";
import { ManifestoPage } from "../pages/manifesto/manifesto";
import { PerfilPage } from "../pages/perfil/perfil";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ColetasPage,
    TabsPage,
    NotasPage,
    ManifestoPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    // TestPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ColetasPage,
    TabsPage,
    NotasPage,
    ManifestoPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
