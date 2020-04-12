import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider

  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Professor Ferreto",
    titulo2: "Professor Grings",
    descricao: "Venha Estudar Com Professor Ferreto",
    qtd_likes: 23,
 
  }



  //public nome_Usuario: string = "helton do codigo" //declarando a variavel publica

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
  ) {

  }

  public soma(a, b): void {
    alert(a + b)
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    });
    loader.present();
   
  }

  ionViewDidLoad() {
    this.presentLoading();
    //coloocar funcoes
    // this.soma(2,5)
    this.movieProvider.getLatesMoovies().
      subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
      )

  }

}
