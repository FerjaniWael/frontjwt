import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  changePassword(currentPassword: string, newPassword: string): void {
    this.authService.changePassword(currentPassword, newPassword)
      .subscribe(
        response => {
          console.log(response); // Handle success response
          // Additional logic or display success message
        },
        error => {
          console.log(error); // Handle error response
          // Display error message
        }
      );
  }

  // Example usage in a component
onSubmit(oldPassword: string, newPassword: string) {
  this.authService.changePassword(oldPassword, newPassword)
    .subscribe(
      () => {
        console.log("succés")
      },
      (error) => {
console.log(error)      
}
    );
}

  

}
