import { Injectable } from '@angular/core';
import { Appointment } from './appointment.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  public appointments: Appointment[] = [];
  public appointmentsUpdated = new Subject<Appointment[]>();
  public appointmendId = 1;
  private jsonFilePath = 'assets/mockData/appointments.json';

  constructor(private httpClient: HttpClient) {}

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    this.appointmendId++;
    console.log(this.appointments);
  }

  updateAppointment(updatedAppointment: Appointment) {
    const index = this.appointments.findIndex(
      (app) => app.id === updatedAppointment.id
    );
    if (index !== -1) {
      this.appointments[index] = updatedAppointment;
    }
  }
}
