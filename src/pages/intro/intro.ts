import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';




@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})

export class IntroPage {

  
  
  constructor(public  navCtrl: NavController, 
    public navParams: NavParams,public loadingCtrl: LoadingController) {
  }
 

  Passando(){
    this.navCtrl.push(TabsPage) //push espera enviar para outra pagina
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 4000
    });
    loader.present();
    this.Passando();
  }
  


  ionViewDidLoad() {
   
  }

}
