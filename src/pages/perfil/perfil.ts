import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Perfil } from '../../models/perfil';

import {AngularFireDatabase}from 'angularfire2/database';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  profile = {} as Perfil

  constructor(private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth
 ,   public navCtrl: NavController,
     public navParams: NavParams) {
  }

  creat(){
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.list(`profile/${auth.uid}`).push(this.profile)
      .then(()=> this.navCtrl.setRoot(TabsPage))

    })
  }

}
