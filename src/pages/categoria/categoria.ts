import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  libros=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public afDB: AngularFireDatabase,private alertCtrl: AlertController) {
    let categoria = navParams.get('categoria');    
    afDB.list('categorias/'+categoria).valueChanges().subscribe(datos=>{
      this.libros=datos;      

    });
  }
  VerDetalle(event){
    

    let alert = this.alertCtrl.create({
      title: 'Ficha',
      subTitle: 'Titulo: '+event.titulo+'\n\nAutor: '+event.autor+'\n\n Clasificación: '+event.clasificacion,
      buttons: ['Aceptar']
    });
    alert.present();
    console.log(event)
  }
  

}
