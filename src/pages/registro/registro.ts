import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from '@angular/fire/database';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  usuario = { Nombre: '', NoControl: '', Correo: '', Password: '', RePassword: '' };
  constructor(private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController,private  auth:AuthProvider,public db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  Registrar() {
    if (this.validar()) {
      this.auth.registrarUsuario(this.usuario.Correo, this.usuario.Password)
        .then((user) => {
          
          var uid=this.auth.UID;
          this.db.database.ref('Usuarios/'+uid).set({ Nombre: this.usuario.Nombre, NoControl:this.usuario.NoControl});
          


          let alert = this.alertCtrl.create({
            title: 'Exito!',
            subTitle: "usuario creado con exito",
            buttons: ['Aceptar']
          });
          alert.present();
        })
        .catch(err => {
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: err.message,
            buttons: ['Aceptar']
          });
          alert.present();
        })
    } else {
      let alert = this.alertCtrl.create({
        title: '¡Error!',
        subTitle: "Error al crear usuario",
        buttons: ['Aceptar']
      });
      alert.present();
    }


    //this.navCtrl.push(LoginPage);

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
  validar() {
    if ((this.usuario.Nombre.trim().length > 3) && (this.usuario.NoControl.trim().length == 8) && (this.usuario.Correo.trim().length > 3)
      && (this.usuario.RePassword.trim().length == this.usuario.Password.trim().length)
      && (this.usuario.RePassword.trim() == this.usuario.Password.trim())) {

      console.log("sucess" + this.usuario.Nombre.trim().length);
      return true;
    } else {
      console.log("error de validacion" + this.usuario.Nombre.trim().length);
      return false;
    }
  }

}
