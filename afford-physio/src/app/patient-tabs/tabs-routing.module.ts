import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../patient-home/patient-home.module').then(
            (m) => m.PatientHomePageModule
          ),
      },
      {
        path: 'physios',
        loadChildren: () =>
          import('../physios-list/physios.module').then(
            (m) => m.PhysiosPageModule
          ),
      },
      {
        path: 'appointments',
        loadChildren: () =>
          import('../appointments/appointments.module').then(
            (m) => m.AppointmentsPageModule
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
export class TabsPageRoutingModule {}
