import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

/**
 * Generated class for the CatalogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage  {
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string|null>;
notas:Object[]=[];
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase,private alertCtrl: AlertController) {
    this.size$ = new BehaviorSubject(null);
    this.items$ = this.size$.pipe(switchMap(size =>afDB.list(
      '/libros', ref =>size ? ref.orderByChild('titulo').limitToFirst(100)
    .startAt(size)
    
    : ref).snapshotChanges()
      )
    );
    
    this.afDB.list('Perfiles/').valueChanges().subscribe(perfiles=>{
      this.notas=perfiles;
      //console.log(perfiles)

    });
 
    
  }

  goToDetalle(event){
    

    let alert = this.alertCtrl.create({
      title: 'Ficha',
      subTitle: 'Titulo: '+event.payload.val().titulo+'\n\nAutor: '+event.payload.val().autor+'\n\n Clasificación: '+event.payload.val().clasificacion,
      buttons: ['Aceptar']
    });
    alert.present();
    console.log(event.payload.key)
  }
  
  getItems(event) {
    
    this.size$.next(event.target.value);
    
    console.log(event.target.value);
    
  }
}
