import { Component, OnInit } from '@angular/core';
import { Physio } from '../physio.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-physio-home',
  templateUrl: './physio-home.page.html',
  styleUrls: ['./physio-home.page.scss'],
})
export class PhysioHomePage implements OnInit {
  public currentUser: Physio = null;
  public userName = 'physio';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.currentUser = this.authService.currentUser as Physio;
    if (this.currentUser != null) {
      this.userName = this.currentUser.name;
    }
  }
}
