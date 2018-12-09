import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarHospedagensPage } from './listar-hospedagens';

@NgModule({
  declarations: [
    ListarHospedagensPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarHospedagensPage),
  ],
})
export class ListarHospedagensPageModule {}
