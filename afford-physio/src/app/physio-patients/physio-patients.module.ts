import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysioPatientsPageRoutingModule } from './physio-patients-routing.module';

import { PhysioPatientsPage } from './physio-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysioPatientsPageRoutingModule
  ],
  declarations: [PhysioPatientsPage]
})
export class PhysioPatientsPageModule {}
