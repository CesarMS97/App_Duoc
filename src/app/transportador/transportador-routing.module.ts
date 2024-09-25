import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportadorPage } from './transportador.page';

const routes: Routes = [
  {
    path: '',
    component: TransportadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportadorPageRoutingModule {}
