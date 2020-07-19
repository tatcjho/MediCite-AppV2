import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CajaDiarioPage } from './caja-diario.page';

const routes: Routes = [
  {
    path: '',
    component: CajaDiarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CajaDiarioPage]
})
export class CajaDiarioPageModule {}
