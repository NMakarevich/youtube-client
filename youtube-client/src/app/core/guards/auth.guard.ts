import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private readonly router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!localStorage.getItem('authorization')) return this.router.parseUrl('/auth');
    const isAutorized = JSON.parse(localStorage.getItem('authorization') as string);
    return isAutorized || this.router.parseUrl('/auth');
  }

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!localStorage.getItem('authorization')) return this.router.parseUrl('/404');
    const isAutorized = JSON.parse(localStorage.getItem('authorization') as string);
    return isAutorized || this.router.parseUrl('/404');
  }
}
