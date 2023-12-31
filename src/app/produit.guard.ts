import { UserService } from './Services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Service_Client/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitGuard implements CanActivate {
 constructor (private  userService:UserService,
    private router : Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.userService.isAdmin())
      return true;
    else {
      this.router.navigate(['app-forbidden']);
      return false;
    }
  }

}

