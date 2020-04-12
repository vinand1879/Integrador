import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html',
 providers: [
    ConfigProvider


  ]
    
  
})
export class MyApp {
  rootPage:any = TabsPage; //primeira pagina a rodar

  constructor(platform: Platform, 
    statusBar: StatusBar,
     splashScreen: SplashScreen ,
   configProvider: ConfigProvider
    
    ) { 
    platform.ready().then(() => {
      
      let config = configProvider.getConfigDate();

      if (config == null){
        this.rootPage = IntroPage;
        configProvider.setConfiDate(false);
      }else{
        this.rootPage = TabsPage;
      }


      statusBar.styleDefault();
      splashScreen.hide(); 
    });
  }
}
