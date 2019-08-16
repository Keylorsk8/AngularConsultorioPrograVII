import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser.user.rol_id === 1) {
      // iniciado sesión, devuelve verdadero
      return true;
    }

    // no logueado,redirigir a la página de inicio de sesión con la URL de retorno
    this.router.navigate(['/'], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
}
