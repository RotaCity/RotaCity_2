import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarPraiasPage } from './listar-praias';

@NgModule({
  declarations: [
    ListarPraiasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarPraiasPage),
  ],
})
export class ListarPraiasPageModule {}
