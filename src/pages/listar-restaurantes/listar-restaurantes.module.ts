import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarRestaurantesPage } from './listar-restaurantes';

@NgModule({
  declarations: [
    ListarRestaurantesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarRestaurantesPage),
  ],
})
export class ListarRestaurantesPageModule {}
