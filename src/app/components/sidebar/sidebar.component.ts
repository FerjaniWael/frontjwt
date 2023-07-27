import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { error } from 'console';
import { response } from 'express';
import { Router } from '@angular/router';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Accueil',  icon: 'dashboard', class: '' },
    { path: '/parametres', title: 'Bus',  icon:'directions_bus', class: '' },
    { path: '/chauffeurs', title: 'Chauffeurs',  icon:'people', class: '' },
    { path: '/stations', title: 'Stations',  icon:'location_on', class: '' },
    { path: '/agences', title: 'Agences',  icon:'business', class: '' },
    { path: '/eleves', title: 'Elèves',  icon:'school', class: '' },
    { path: '/personnels', title: 'Personnels',  icon:'person', class: '' },
    { path: '/classes', title: 'Classes',  icon:'class', class: '' },
    { path: '/annee-scolaire', title: 'Années Scolaires',  icon:'date_range', class: '' },
    { path: '/affectation-eleve', title: 'Affectation Elève',  icon:'assignment_ind', class: '' },
    { path: '/affectation-personnel', title: 'Affectation Personnel',  icon:'assignment', class: '' },
    { path: '/lignes', title: 'Lignes',  icon:'directions', class: '' },
];
export const ROUTESS: RouteInfo[] = [
  { path: '/dashboarduser', title: 'Accueil',  icon: 'dashboard', class: '' },
  { path: '/parametres', title: 'Bus',  icon:'directions_bus', class: '' },
  { path: '/stationsuser', title: 'Stations',  icon:'location_on', class: '' },
  { path: '/agencesuser', title: 'Agences',  icon:'business', class: '' },
  { path: '/elevesuser', title: 'Elèves',  icon:'school', class: '' },
  { path: '/classesuser', title: 'Classes',  icon:'class', class: '' },
  { path: '/annee-scolaireuser', title: 'Années Scolaires',  icon:'date_range', class: '' },
  { path: '/affectation-eleveuser', title: 'Affectation Elève',  icon:'assignment_ind', class: '' },
  { path: '/affectation-personneluser', title: 'Affectation Personnel',  icon:'assignment', class: '' },
  { path: '/lignes', title: 'Lignesuser',  icon:'directions', class: '' },
  { path: '/register', title: 'registersuser',  icon:'directions', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
    if(this.authService.getRole()=='ROLE_MODERATOR'){
    this.menuItems = ROUTES.filter(menuItem => menuItem);}
    else if(this.authService.getRole()=='ROLE_USER'){
      this.menuItems = ROUTESS.filter(menuItem => menuItem);
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  signout() {
    // Clear local storage
    localStorage.removeItem('role');
  
    // Clear session storage
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('jwtToken');
  
    // Call the signout API
    this.authService.signout().subscribe(
      response => {
        // Handle successful signout response
        this.router.navigate(['/login']);
        console.log(response);
      },
      error => {
        // Handle error response
        console.log(error);
      }
    );
  }
  findRole(){
    if(this.authService.getRole()=='ROLE_USER'){
        return "user";
    }
    else if(this.authService.getRole()=='ROLE_MODERATOR'){
        return "moderator"
    }
    else return "";
}
}
