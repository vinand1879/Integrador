import { Injectable } from '@angular/core';

let config_name_kay  = "config"; // variavel constante 

@Injectable()
export class ConfigProvider {

   public config = { //fazendo slide aparecer uma vez só
    showSlide: false,
    name: "",
    username: ""
 
  }

  constructor() {

  }
  //recupera os dados do localstorage
  getConfigDate(): any{
    return localStorage.getItem(config_name_kay);

  }
  //grava os dados
  setConfiDate(showSlide?: boolean, name?: string, username?: string){
      let config = {
       showSlide: false,
       name: "",
       username: ""
      };
      if(showSlide){
        config.showSlide = showSlide;
      }
      if (name){
        config.name= name;
      }
      if (username){
        config.username= username;
      }
    
  
      localStorage.setItem(config_name_kay, JSON.stringify(config));

  }


  }


