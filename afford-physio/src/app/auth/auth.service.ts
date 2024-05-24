import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated = false;
  private _authenticatedAs = '';

  constructor() {}

  get isAuthenticated() {
    return this._isAuthenticated;
  }
  get authenticatedAs() {
    return this._authenticatedAs;
  }

  login(user: string) {
    this._isAuthenticated = true;
    this._authenticatedAs = user;
  }

  logout() {
    this._isAuthenticated = false;
    this._authenticatedAs = '';
  }
}
