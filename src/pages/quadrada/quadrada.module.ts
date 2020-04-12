import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuadradaPage } from './quadrada';

@NgModule({
  declarations: [
    QuadradaPage,
  ],
  imports: [
    IonicPageModule.forChild(QuadradaPage),
  ],
})
export class QuadradaPageModule {}
