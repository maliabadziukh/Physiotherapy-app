import { Component, OnDestroy, OnInit } from '@angular/core';
import { Patient } from '../patient.model';
import { Subscription } from 'rxjs';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-physio-patients',
  templateUrl: './physio-patients.page.html',
  styleUrls: ['./physio-patients.page.scss'],
})
export class PhysioPatientsPage implements OnInit, OnDestroy {
  patients: Patient[] = [];
  private patientsSub: Subscription;

  constructor(public patientsService: PatientsService) {}

  ngOnInit(): void {
    this.patientsService.getPatients();
    this.patientsSub = this.patientsService
      .getPatientsUpdateListener()
      .subscribe((patients: Patient[]) => {
        this.patients = patients;
      });
  }

  ngOnDestroy(): void {
    this.patientsSub.unsubscribe();
  }
}
