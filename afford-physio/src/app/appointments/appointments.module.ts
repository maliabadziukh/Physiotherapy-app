import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentsPage } from './appointments.page';

import { AppointmentsPageRoutingModule } from './appointments-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AppointmentsPageRoutingModule,
  ],
  declarations: [AppointmentsPage],
})
export class AppointmentsPageModule {}
