import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login() {
    const authObj: { isAutorized: boolean } = { isAutorized: true };
    localStorage.setItem('authorisation', JSON.stringify(authObj));
    this.router.navigate(['search']);
  }
}
