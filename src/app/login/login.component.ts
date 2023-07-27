import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService,private router: Router) {}

  loginRequest: any = {}; 


  onSubmit(): void {
    this.authService.signin(this.loginRequest)
      .subscribe(
        response => {
          // Handle successful sign-in response
          console.log(response);
          const userRole = this.authService.getRole(); // Replace with the method to retrieve the user's role from your AuthService
          console.log(userRole)

          // Store the JWT token in session storage
          sessionStorage.setItem('jwtToken', response.jwt);// Change 'token' to the key you want to use
          if (response.body.roles && response.body.roles.length > 0) {
            const role = response.body.roles[0];
            localStorage.setItem('role', role);
            sessionStorage.setItem('role', role);
          }
        if(response.body.roles[0]=='ROLE_MODERATOR')
        this.router.navigate(['/dashboard']);
        else if(response.body.roles[0]=='ROLE_USER')
        this.router.navigate(['/dashboarduser'])
        console.log('Login successful:', response);
        },
        error => {
          // Handle error response
          console.log(error);
        }
      );
  }
  
}
