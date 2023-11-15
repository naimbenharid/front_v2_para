import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 /* //users: User[] =[];
  users: User[] = [ {id:1,"username":"admin","password":"123","email":"admin",orders:[],"roles":['ADMIN']},];


  public loggedUser!:string;
  public isloggedIn: Boolean = false;
  public roles!:string[];

  constructor(private router : Router) { }

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.email == curUser.email && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.email;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
      return validUser;
  }

  isAdmin():Boolean
    {
      if (!this.roles) //this.roles== undefiened
        return false;
      return (this.roles.indexOf('ADMIN') >-1) ;
      ;
    }

  logout()
   {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['']);
   }*/
}
