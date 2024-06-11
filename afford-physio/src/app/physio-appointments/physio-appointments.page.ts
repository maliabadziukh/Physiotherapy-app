import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment.model';
import { AuthService } from '../auth/auth.service';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-physio-appointments',
  templateUrl: './physio-appointments.page.html',
  styleUrls: ['./physio-appointments.page.scss'],
})
export class PhysioAppointmentsPage {
  requestedAppointments: Appointment[] = [];
  isReqApptEmpty = true;

  constructor(
    public authService: AuthService,
    public apptService: AppointmentsService
  ) {}

  ionViewWillEnter(): void {
    this.requestedAppointments = this.apptService
      .getAppointments()
      .filter((appt) => {
        if (
          appt.physio.id === this.authService.currentUser.id &&
          appt.status === 'Pending'
        ) {
          return true;
        } else {
          return false;
        }
      });
    this.isReqApptEmpty = this.requestedAppointments.length === 0;
    console.log(this.requestedAppointments);
    console.log(this.isReqApptEmpty);
    console.log('all appts: ' + this.apptService.appointments);
  }

  onAccept(apptId: number) {
    this.apptService.appointments.forEach((appt) => {
      if (appt.id == apptId) {
        appt.status = 'Confirmed';
      }
    });
  }

  onReject(apptId: number) {
    this.apptService.appointments.forEach((appt) => {
      if (appt.id == apptId) {
        appt.status = 'Rejected';
      }
    });
  }
}
