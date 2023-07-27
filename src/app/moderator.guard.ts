import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Replace with the actual path to your AuthService
@Injectable()
export class ModeratorGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userRole = this.authService.getRole(); // Replace with the method to retrieve the user's role from your AuthService
    console.log(userRole)
    if (userRole === 'ROLE_MODERATOR') {
      return true; // Allow access to the route
    } else {
      // Redirect to an unauthorized page or display an error message
      return false; // Block access to the route
    }
  }
}
