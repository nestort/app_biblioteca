import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from '@angular/fire/database';
/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {
  publicaciones=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public db:AngularFireDatabase) {
    db.list('Publicaciones/publicas').valueChanges().subscribe(publicaciones=>{
      this.publicaciones=publicaciones;
    })
  }

  

}
