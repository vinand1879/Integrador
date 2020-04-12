import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AfimPage } from '../afim/afim';
import { QuadradaPage } from '../quadrada/quadrada';
import { ModularPage } from '../modular/modular';

/**
 * Generated class for the AssuntosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assuntos',
  templateUrl: 'assuntos.html',
})
export class AssuntosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirAfim(){
    this.navCtrl.push(AfimPage);
  }
  abrirQuadrada(){
    this.navCtrl.push(QuadradaPage);
  }
  abrirModular(){
    this.navCtrl.push(ModularPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AssuntosPage');
  }

}
