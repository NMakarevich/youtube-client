import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public subject = new ReplaySubject<boolean>(1);

  constructor(private readonly router: Router) {
    const auth = localStorage.getItem('authorization');
    if (auth) this.subject.next(true);
    else this.subject.next(false);
  }

  login() {
    localStorage.setItem('authorization', 'true');
    this.router.navigate(['search']);
    this.subject.next(true);
  }
}
