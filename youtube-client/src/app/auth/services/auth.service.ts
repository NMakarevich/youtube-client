import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly router: Router) {}

  login() {
    localStorage.setItem('authorization', 'true');
    this.router.navigate(['search']);
  }
}
