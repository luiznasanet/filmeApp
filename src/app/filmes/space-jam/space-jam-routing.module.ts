import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceJamPage } from './space-jam.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceJamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceJamPageRoutingModule {}
