import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceJamPageRoutingModule } from './space-jam-routing.module';

import { SpaceJamPage } from './space-jam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceJamPageRoutingModule
  ],
  declarations: [SpaceJamPage]
})
export class SpaceJamPageModule {}
