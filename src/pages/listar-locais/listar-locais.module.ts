import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarLocaisPage } from './listar-locais';

@NgModule({
  declarations: [
    ListarLocaisPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarLocaisPage),
  ],
})
export class ListarLocaisPageModule {}
