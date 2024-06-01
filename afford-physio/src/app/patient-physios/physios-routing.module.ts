import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysiosPage } from './physios.page';

const routes: Routes = [
  {
    path: '',
    component: PhysiosPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysiosPageRoutingModule {}
