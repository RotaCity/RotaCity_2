import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarCircuitosPage } from './listar-circuitos';

@NgModule({
  declarations: [
    ListarCircuitosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarCircuitosPage),
  ],
})
export class ListarCircuitosPageModule {}
