import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDiagnosticoPageRoutingModule } from './listar-diagnostico-routing.module';

import { ListarDiagnosticoPage } from './listar-diagnostico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDiagnosticoPageRoutingModule
  ],
  declarations: [ListarDiagnosticoPage]
})
export class ListarDiagnosticoPageModule {}
