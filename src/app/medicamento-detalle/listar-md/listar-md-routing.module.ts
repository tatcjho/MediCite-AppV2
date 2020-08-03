import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarMdPage } from './listar-md.page';

const routes: Routes = [
  {
    path: '',
    component: ListarMdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarMdPageRoutingModule {}
