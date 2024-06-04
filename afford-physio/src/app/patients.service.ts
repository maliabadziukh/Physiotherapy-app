import { Injectable } from '@angular/core';
import { Patient } from './patient.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private patients: Patient[] = [];
  private patientsUpdated = new Subject<Patient[]>();

  constructor(private httpClient: HttpClient) {}

  getPatients() {
    this.httpClient
      .get<Patient[]>('/assets/mockData/patients.json')
      .subscribe((patients) => {
        this.patients = patients;
        this.patientsUpdated.next([...this.patients]);
      });
  }
  getPatientsUpdateListener() {
    return this.patientsUpdated.asObservable();
  }
}
