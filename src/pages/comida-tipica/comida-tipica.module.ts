import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComidaTipicaPage } from './comida-tipica';

@NgModule({
  declarations: [
    ComidaTipicaPage,
  ],
  imports: [
    IonicPageModule.forChild(ComidaTipicaPage),
  ],
})
export class ComidaTipicaPageModule {}
