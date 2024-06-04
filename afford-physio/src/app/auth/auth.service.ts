import { Injectable } from '@angular/core';
import { Patient } from '../patient.model';
import { Physio } from '../physio.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticatedAs = '';
  private _currentUser: Patient | Physio = null;

  constructor(private httpCLient: HttpClient) {}

  get authenticatedAs() {
    return this._authenticatedAs;
  }
  get currentUser() {
    return this._currentUser;
  }

  login(
    userType: string,
    email: string,
    password: string
  ): Observable<Patient | Physio> {
    return this.httpCLient
      .get<Patient[] | Physio[]>(`/assets/mockData/${userType}s.json`)
      .pipe(
        map((users) => {
          const user = users.find(
            (user) => user.email === email && user.password === password
          );
          if (user) {
            this._currentUser = user;
            this._authenticatedAs = userType;

            return user;
          } else {
            throw new Error('User not found.');
          }
        })
      );
  }

  logout() {
    this._currentUser = null;
    this._authenticatedAs = '';
  }
}
