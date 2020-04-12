import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed'; //importando
import { IntroPage } from '../intro/intro';
import { SobrePage } from '../sobre/sobre';






@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
 
  tab4Root =  FeedPage; //nova aba no menu
  tab5Root =  IntroPage;
  tab6Root =  SobrePage;


  
  

  constructor() {

  }
}
