import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public subject = new BehaviorSubject<boolean>(false);

  constructor(private readonly router: Router) {
    const auth = localStorage.getItem('authorization');
    if (auth) this.subject.next(true);
  }

  getAuth() {
    return this.subject.pipe(map((isAuth) => ({ isAuth })));
  }

  login() {
    localStorage.setItem('authorization', 'true');
    this.subject.next(true);
    this.router.navigate(['search']);
  }
}
