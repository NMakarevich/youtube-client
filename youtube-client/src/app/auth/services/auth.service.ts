import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly router: Router) {
    const auth = localStorage.getItem('authorization');
    if (auth) this.isAuth$.next(true);
  }

  getAuth() {
    return this.isAuth$.pipe(map((isAuth) => ({ isAuth })));
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
