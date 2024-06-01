import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysioAppointmentsPageRoutingModule } from './physio-appointments-routing.module';

import { PhysioAppointmentsPage } from './physio-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysioAppointmentsPageRoutingModule
  ],
  declarations: [PhysioAppointmentsPage]
})
export class PhysioAppointmentsPageModule {}
