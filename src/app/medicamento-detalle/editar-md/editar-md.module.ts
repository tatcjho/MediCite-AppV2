import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarMdPageRoutingModule } from './editar-md-routing.module';

import { EditarMdPage } from './editar-md.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarMdPageRoutingModule
  ],
  declarations: [EditarMdPage]
})
export class EditarMdPageModule {}
