import { Component, OnDestroy, OnInit } from '@angular/core';
import { Appointment } from '../appointment.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AppointmentsService } from '../appointments.service';
import { Patient } from '../patient.model';
import { Physio } from '../physio.model';

@Component({
  selector: 'app-appointments',
  templateUrl: 'appointments.page.html',
  styleUrls: ['appointments.page.scss'],
})
export class AppointmentsPage {
  appointments: Appointment[] = [];

  constructor(
    public authService: AuthService,
    public appointmentsService: AppointmentsService
  ) {}

  ionViewWillEnter(): void {
    this.appointments = this.appointmentsService
      .getAppointments()
      .filter((appt) => {
        if (appt.patient.id === this.authService.currentUser.id) {
          return true;
        } else {
          return false;
        }
      });
    console.log(this.appointments);
  }
}
