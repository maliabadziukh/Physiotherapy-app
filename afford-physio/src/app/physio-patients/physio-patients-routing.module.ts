import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysioPatientsPage } from './physio-patients.page';

const routes: Routes = [
  {
    path: '',
    component: PhysioPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysioPatientsPageRoutingModule {}
