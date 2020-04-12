import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicerProvider } from '../../providers/servicer/servicer';



@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  users: string[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public servecer: ServicerProvider) {
      this.getDados(); 
  }

  getDados(){
   this.servecer.getData().subscribe(
         data => this.users = data,
         err => console.log(err)
   );
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

}
