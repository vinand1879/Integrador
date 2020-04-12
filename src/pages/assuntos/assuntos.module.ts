import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssuntosPage } from './assuntos';

@NgModule({
  declarations: [
    AssuntosPage,
  ],
  imports: [
    IonicPageModule.forChild(AssuntosPage),
  ],
})
export class AssuntosPageModule {}
