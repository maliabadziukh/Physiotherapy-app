import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysioHomePageRoutingModule } from './physio-home-routing.module';

import { PhysioHomePage } from './physio-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysioHomePageRoutingModule
  ],
  declarations: [PhysioHomePage]
})
export class PhysioHomePageModule {}
