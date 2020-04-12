import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {HttpModule} from '@angular/http'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MoovieProvider } from '../providers/moovie/moovie';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { SobreNósPageModule } from '../pages/sobre-n\u00F3s/sobre-n\u00F3s.module';

import { AssuntosPageModule } from '../pages/assuntos/assuntos.module';
import { QuizPageModule } from '../pages/quiz/quiz.module';
import { ServicerProvider } from '../providers/servicer/servicer';
import { QuestionarioPageModule } from '../pages/questionario/questionario.module';


import {AngularFireModule} from "angularfire2";

import { Data } from '../providers/data/data';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { AngularFireAuthModule } from "angularfire2/auth";
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AfimPageModule } from '../pages/afim/afim.module';
import { QuadradaPageModule } from '../pages/quadrada/quadrada.module';
import { ModularPageModule } from '../pages/modular/modular.module';




@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    FlashCardComponent
    
    
  
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpModule,
    SobrePageModule,
    PerfilPageModule,
    SobreNósPageModule,
    AssuntosPageModule,
    QuizPageModule,
    QuestionarioPageModule,
    LoginPageModule,
    RegisterPageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AfimPageModule,
    QuadradaPageModule,
    ModularPageModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG) 
   

   



  
   
 
  
    
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    ServicerProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider,
    Data
    
  ]
})
export class AppModule {}
