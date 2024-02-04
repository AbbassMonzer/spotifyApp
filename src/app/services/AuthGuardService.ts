import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const fragment = window.location.hash.substring(1);
    if (fragment) {
      const paramsArray = fragment.split('&');
      const accessTokenParam = paramsArray.find(param => param.startsWith('access_token='));
      if (accessTokenParam) {
        const accessToken = accessTokenParam.split('=')[1];
        localStorage.setItem('spotify_access_token', accessToken);
        return true
      } else {
        this.router.navigate(['/']);
        return false
      }
    }
    return false
  }

}
