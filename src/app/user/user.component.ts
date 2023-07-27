import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 

  constructor(private authService: AuthService,private router: Router,private http: HttpClient) {}
  signUpRequest: any = {};

  signup(): void {
    this.authService.signup(this.signUpRequest)
      .subscribe(
        response => {
          console.log(response); // Handle success response
          // After successful signup, call the signin method
        /*  this.signinAfterSignup();*/
        },
        error => {
          console.log(error); // Handle error response
        }
      );
  }
  
  signinAfterSignup(): void {
    const loginRequest = {
      username: this.signUpRequest.username,
      password: this.signUpRequest.password
    };
  
    this.authService.signin(loginRequest)
      .subscribe(
        response => {
          // Handle successful sign-in response
          console.log(response);
  
          // Store the JWT token in session storage
          sessionStorage.setItem('jwtToken', response.jwt); // Change 'token' to the key you want to use
          localStorage.setItem('role', response.roles);
          sessionStorage.setItem('role', response.roles);
  
          this.router.navigate(['/dashboard']);
          console.log('Login successful:', response);
        },
        error => {
          // Handle error response
          console.log(error);
        }
      );
  }
  
  
  
}
