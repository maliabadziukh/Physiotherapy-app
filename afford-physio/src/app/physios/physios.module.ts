import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhysiosPage } from './physios.page';

import { PhysiosPageRoutingModule } from './physios-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, PhysiosPageRoutingModule],
  declarations: [PhysiosPage],
})
export class PhysiosPageModule {}
