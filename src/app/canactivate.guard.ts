import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {

  // INSTANCIAR EL SERVICIO DE AUTENTICACION Y EL ROUTER

  constructor(private autenticacion: AutenticacionService, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Comprobar si el usuario inicio sesión

    if(this.autenticacion.isLoggedIn(state.url)){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
