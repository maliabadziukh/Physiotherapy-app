import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-patient-home',
  templateUrl: 'patient-home.page.html',
  styleUrls: ['patient-home.page.scss'],
})
export class PatientHomePage implements OnInit {
  private _currentUser: Patient = null;
  private _userName: string = 'patient';

  get currentUser() {
    return this._currentUser;
  }
  set currentUser(patient: Patient) {
    this._currentUser = patient;
  }

  get userName() {
    return this._userName;
  }

  set userName(userName: string) {
    this._userName = userName;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser as Patient;
    if (this.currentUser != null) {
      this.userName = this.currentUser.name;
    }
  }
}
