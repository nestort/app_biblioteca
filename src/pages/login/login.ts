import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {RegistroPage} from '../../pages/registro/registro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario={correo:'', password:''};
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider,public alertCtrl:AlertController) {
  
  }
  Registrar(){
    this.navCtrl.push(RegistroPage);
    /*this.auth.registrarUsuario(this.usuario.correo,this.usuario.password)
    .then((user) => {
      let alert = this.alertCtrl.create({
        title: 'Exito!',
        subTitle: "usuario creado con exito",
        buttons: ['Aceptar']
      });
      alert.present();
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })*/
  }
  inicio(){
    this.auth.loginUsuario(this.usuario.correo,this.usuario.password ).then((user) => {
    }
  )
   .catch(err=>{
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: err.message,
      buttons: ['Aceptar']
    });
    alert.present();
  })
  }
  // Devuelve la session
 get Session(){
  return this.auth.Sesion;
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
