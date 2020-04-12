import { Component } from '@angular/core';
import { ToastController, NavController, MenuController, LoadingController } from 'ionic-angular';
import { SobreNósPage } from '../sobre-n\u00F3s/sobre-n\u00F3s';

import { AssuntosPage } from '../assuntos/assuntos';
import { QuestionarioPage } from '../questionario/questionario';
import { LoginPage } from '../login/login';

import {AngularFireAuth} from 'angularfire2/auth';
import { PerfilPage } from '../perfil/perfil';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private toast: ToastController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController
  ) {

  }
  abrirSN(){
    this.navCtrl.push(SobreNósPage);
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
  IrPerfil(){
    this.navCtrl.push(PerfilPage);
  }

  abrirAss(){
    this.navCtrl.push(AssuntosPage);
  }
  abrirq(){
    this.navCtrl.push(QuestionarioPage)
  }
  IrLogin(){
    this.navCtrl.push(LoginPage)
  }
 

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Carregando Quiz...",
      duration: 2000
    });
    loader.present();

   
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
      this.toast.create({

        message: `Seja bem-vindo ao ExatasExatas!,${data.email}`,
        duration: 5000
      }).present();
    }else{
      this.toast.create({
        message: `Não Conectado.`,
        duration: 5000
      }).present();
    }

    });
  
    
  }
}


  