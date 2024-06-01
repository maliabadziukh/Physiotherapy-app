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
  userType: string = 'patient';
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }
  onLogin() {
    console.log('attempting to log in...');
    this.authService
      .login(
        this.userType,
        this.loginForm.value.email,
        this.loginForm.value.password
      )
      .subscribe({
        next: (user) => {
          console.log('Login successful:', user);
          this.router.navigateByUrl(`/${this.userType}/home`);
          this.message = '';
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.message = 'Invalid email or password';
        },
      });
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
