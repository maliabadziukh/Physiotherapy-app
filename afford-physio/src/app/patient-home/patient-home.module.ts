import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientHomePage } from './patient-home.page';

import { HomePageRoutingModule } from './patient-home-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, HomePageRoutingModule],
  declarations: [PatientHomePage],
})
export class PatientHomePageModule {}
