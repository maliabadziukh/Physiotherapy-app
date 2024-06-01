import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { patientAuthGuard } from './auth/patient-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./patient-tabs/tabs.module').then((m) => m.TabsPageModule),
    canLoad: [patientAuthGuard],
  },
  {
    path: 'physio',
    loadChildren: () =>
      import('./physio-tabs/physio-tabs.module').then(
        (m) => m.PhysioTabsPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
