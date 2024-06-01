import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysioTabsPage } from './physio-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PhysioTabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../physio-home/physio-home.module').then(
            (m) => m.PhysioHomePageModule
          ),
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('../physio-patients/physio-patients.module').then(
            (m) => m.PhysioPatientsPageModule
          ),
      },
      {
        path: 'appointments',
        loadChildren: () =>
          import('../physio-appointments/physio-appointments.module').then(
            (m) => m.PhysioAppointmentsPageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PhysioTabsPageRoutingModule {}
