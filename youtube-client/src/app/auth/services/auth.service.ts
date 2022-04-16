import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { startWith, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth$ = new Subject<boolean>();

  constructor(private readonly router: Router) {}

  getAuth() {
    const isAuth = JSON.parse(localStorage.getItem('authorization') as string);
    return this.isAuth$.pipe(startWith(isAuth ?? false));
  }

  login() {
    localStorage.setItem('authorization', 'true');
    this.isAuth$.next(true);
    this.router.navigate(['search']);
  }

  logout() {
    localStorage.removeItem('authorization');
    this.isAuth$.next(false);
    this.router.navigate(['auth']);
  }
}
