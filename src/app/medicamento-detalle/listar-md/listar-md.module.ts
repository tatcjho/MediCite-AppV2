import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarMdPageRoutingModule } from './listar-md-routing.module';

import { ListarMdPage } from './listar-md.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarMdPageRoutingModule
  ],
  declarations: [ListarMdPage]
})
export class ListarMdPageModule {}
