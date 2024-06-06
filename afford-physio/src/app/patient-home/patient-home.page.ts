import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Patient } from '../patient.model';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { PhysiosService } from '../physios.service';
import { Physio } from '../physio.model';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentsService } from '../appointments.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-patient-home',
  templateUrl: 'patient-home.page.html',
  styleUrls: ['patient-home.page.scss'],
})
export class PatientHomePage implements OnInit, OnDestroy {
  @ViewChild(IonModal) modal: IonModal;
  private _currentUser: Patient = null;
  private _userName: string = 'patient';
  public physios: Physio[] = [];
  private physiosSub: Subscription;
  appointmentForm: FormGroup;
  private requestedAppointment: Appointment;

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
    private physiosService: PhysiosService,
    private appointmentsService: AppointmentsService
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

    this.appointmentForm = new FormGroup({
      physiotherapist: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      location: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      dateTime: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }

  onCancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onConfirm() {
    console.log(this.appointmentForm);
    this.modal.dismiss(null, 'confirm');
    console.log('Submiting appointment request...');
    this.requestedAppointment = new Appointment(
      this.appointmentsService.appointmendId,
      this.currentUser,
      this.appointmentForm.value.physiotherapist,
      this.appointmentForm.value.location,
      this.appointmentForm.value.dateTime,
      'Pending'
    );
    this.appointmentsService.addAppointment(this.requestedAppointment);
  }

  ngOnDestroy(): void {
    this.physiosSub.unsubscribe();
  }
}
