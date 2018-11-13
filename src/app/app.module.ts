import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import {CatalogoPage} from '../pages/catalogo/catalogo';
import {BusquedaPage} from '../pages/busqueda/busqueda';
import {SocialPage} from '../pages/social/social';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthProvider } from '../providers/auth/auth';

export const  config = {
  apiKey: "AIzaSyDsz3XVsoxDKsTviYXtegxOZH3FIyJ3j5o",
    authDomain: "redsocial-214db.firebaseapp.com",
    databaseURL: "https://redsocial-214db.firebaseio.com",
    projectId: "redsocial-214db",
    storageBucket: "",
    messagingSenderId: "665661109136"

}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    CatalogoPage,
    BusquedaPage,
    SocialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    CatalogoPage,
    BusquedaPage,
    SocialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
