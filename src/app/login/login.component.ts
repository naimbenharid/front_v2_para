import { AuthService } from './../Service_Client/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService,private router : Router ) {


    this.signInForm = this.formBuilder.group({
      useremail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  signIn() {
    const { useremail, password } = this.signInForm.value;
    console.log(this.signInForm);
    this.userService.signIn(useremail, password).subscribe(
      response => {
        console.log('User signed in successfully:', response);
        this.router.navigateByUrl("/products")
      },
      error => {
        alert('User Introuvable !! . please try again');
        console.error('Error signing up:', error);
      }
    );
  }
}





