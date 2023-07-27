import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8081/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                                }
                                                                )
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }
  
  logine(email: string, password: string) {
    // Make API request to login endpoint
    return this.http.post('http://localhost:8081/api/auth/logine', { email, password });
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username,
      email,
      password,

      
    }, httpOptions);
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', { username, password },{ observe: 'response',withCredentials: true });
  }

  logout(): void {
    // Remove the token from local storage or session storage
    localStorage.removeItem('token'); // Change 'token' to the key you are using
    sessionStorage.removeItem('token')
  }

  getToken(): string  {
    return localStorage.getItem('token'); // Change 'token' to the key you are using
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    // Check if the token is present and not expired
    return token !== null;
  }

  private baseUrl = 'http://localhost:8081/api/auth'; // Replace with your backend base URL

  signin(loginRequest: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, loginRequest, { observe: 'response',withCredentials: true });
  }

 
  signup(signUpRequest: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, signUpRequest,{ withCredentials: true });
  }

  signout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/signout`, null, { withCredentials: true });
  }
  changePassword(oldPassword: string, newPassword: string) {
    const url = '/http://localhost:8081/api/auth/change-password'; // Replace with your actual API URL
  
    const body = {
      oldPassword: oldPassword,
      newPassword: newPassword
    };
  
    return this.http.post(url, body,{ withCredentials: true });
  }
  
  getRole(): string | null {
    return sessionStorage.getItem('role');
  }
  
  
  
}
