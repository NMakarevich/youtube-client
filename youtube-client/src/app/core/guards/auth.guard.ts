import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private readonly router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuth('/auth');
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuth('/404');
  }

  checkAuth(redirectTo: string) {
    if (!localStorage.getItem('authorization')) return this.router.parseUrl(redirectTo);
    const isAutorized = JSON.parse(localStorage.getItem('authorization') as string);
    return isAutorized || this.router.parseUrl(redirectTo);
  }
}
