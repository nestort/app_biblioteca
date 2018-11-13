import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {CatalogoPage} from '../../pages/catalogo/catalogo';
import {BusquedaPage} from '../../pages/busqueda/busqueda';
import {SocialPage} from '../../pages/social/social';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,public Auth:AuthProvider) {

  }
  CerrarSesion(){
    this.Auth.cerrarSesion();
  }
  Catalogo(){
    this.navCtrl.push(CatalogoPage);
    
  }
  Busqueda(){
    this.navCtrl.push(BusquedaPage);
    
  }
  Social(){
    this.navCtrl.push(SocialPage);
    
  }


}
