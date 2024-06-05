import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Patient } from '../patient.model';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { PhysiosService } from '../physios.service';
import { Physio } from '../physio.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patient-home',
  templateUrl: 'patient-home.page.html',
  styleUrls: ['patient-home.page.scss'],
})
export class PatientHomePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  private _currentUser: Patient = null;
  private _userName: string = 'patient';
  public physios: Physio[] = [];
  private physiosSub: Subscription;

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

  constructor(
    private authService: AuthService,
    private physiosService: PhysiosService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser as Patient;
    if (this.currentUser != null) {
      this.userName = this.currentUser.name;
    }
    this.physiosService.getPhysios();
    this.physiosSub = this.physiosService
      .getPhysiosUpdateListener()
      .subscribe((physios: Physio[]) => {
        this.physios = physios;
      });
  }

  onCancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onConfirm() {
    this.modal.dismiss(null, 'confirm');
    console.log('Submit appointment request.');
  }
}
