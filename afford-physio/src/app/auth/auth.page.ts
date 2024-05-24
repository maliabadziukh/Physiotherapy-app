import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  user: string = 'patient';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  onLogin() {
    this.authService.login(this.user);
    const navUrl = `/${this.user}/home`;
    console.log(navUrl);
    this.router.navigateByUrl(navUrl);
  }
  onLogout() {
    this.authService.logout;
  }
}
