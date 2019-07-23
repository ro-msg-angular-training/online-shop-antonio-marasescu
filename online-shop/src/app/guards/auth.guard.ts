import {Injectable, OnInit} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {selectCurrentAuthUser} from '../store/selectors/auth-user.selectors';
import {AuthUser} from '../models/auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private userState$;
  private user: AuthUser;

  constructor(private router: Router,
              private store: Store<IAppState>) {
    this.userState$ = this.store.select(selectCurrentAuthUser);
    this.userState$.subscribe(user => this.user = user);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.user) {
      return !next.data.roles || this.user.roles.includes(next.data.roles);
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
