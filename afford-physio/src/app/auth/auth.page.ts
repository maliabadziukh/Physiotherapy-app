import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @ViewChild(IonModal) patientModal: IonModal;

  loginForm: FormGroup;
  user: string = 'patient';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      specialisation: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }
  onLogin() {
    this.authService.login(this.user);
    const navUrl = `/${this.user}/home`;
    console.log(navUrl);
    this.router.navigateByUrl(navUrl);
  }
  onRegister() {}
  onLogout() {
    this.authService.logout;
  }

  patientCancel() {
    this.patientModal.dismiss(null, 'cancel');
  }

  patientConfirm() {
    this.patientModal.dismiss(null, 'confirm');
    //register the user
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = 'Successfully registered!';
    }
  }
}
