import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysioTabsPageRoutingModule } from './physio-tabs-routing.module';

import { PhysioTabsPage } from './physio-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysioTabsPageRoutingModule
  ],
  declarations: [PhysioTabsPage]
})
export class PhysioTabsPageModule {}
