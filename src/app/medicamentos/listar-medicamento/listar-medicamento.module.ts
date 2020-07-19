import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarMedicamentoPage } from './listar-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: ListarMedicamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarMedicamentoPage]
})
export class ListarMedicamentoPageModule {}
