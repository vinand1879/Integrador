import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModularPage } from './modular';

@NgModule({
  declarations: [
    ModularPage,
  ],
  imports: [
    IonicPageModule.forChild(ModularPage),
  ],
})
export class ModularPageModule {}
