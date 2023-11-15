import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService,private router:Router) {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      useremail: ['', Validators.required]
    });}

  ngOnInit(): void {
  }


  signUp() {
    const user = this.signUpForm.value;
    this.userService.signUp(user).subscribe(
      response => {
        // Succès
        alert('User signed up successfully!');
        this.router.navigateByUrl("/products");
        // Vous pouvez également rediriger vers une autre page ici
      },
      error => {
        // Erreur
        alert('User déja utulisé . please try again');
        console.error('Error signing up:', error);
      }
    );
  }

  }
