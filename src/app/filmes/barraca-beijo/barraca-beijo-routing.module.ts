import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarracaBeijoPage } from './barraca-beijo.page';

const routes: Routes = [
  {
    path: '',
    component: BarracaBeijoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarracaBeijoPageRoutingModule {}
