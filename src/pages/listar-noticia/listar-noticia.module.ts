import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarNoticiaPage } from './listar-noticia';

@NgModule({
  declarations: [
    ListarNoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarNoticiaPage),
  ],
})
export class ListarNoticiaPageModule {}
