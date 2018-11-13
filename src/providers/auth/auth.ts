import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth) {
  }

  loginUsuario(correo:string, password:string){
    return this.auth.auth.signInWithEmailAndPassword(correo, password)
      .then(user=>Promise.resolve(user))
      .catch(err=>Promise.reject(err))
  }

  registrarUsuario(correo: string, password: string) {
    return this.auth.auth.createUserWithEmailAndPassword(correo, password).then((res) => {
      console.log("Usuario ");
    })
      .catch(err => Promise.reject(err))
  }
  
  
 // Logout de usuario
 cerrarSesion(){
  this.auth.auth.signOut().then(()=>{
    // hemos salido
  })
}

// Devuelve la session
get Sesion(){
 return this.auth.authState;
}
get UID(){
  return this.auth.auth.currentUser.uid;
 }
 



}
