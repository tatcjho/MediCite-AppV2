import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarDiagnosticoPage } from './listar-diagnostico.page';

const routes: Routes = [
  {
    path: '',
    component: ListarDiagnosticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarDiagnosticoPageRoutingModule {}
