import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysioAppointmentsPage } from './physio-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: PhysioAppointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysioAppointmentsPageRoutingModule {}
