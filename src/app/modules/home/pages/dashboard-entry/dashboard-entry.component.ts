import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: 'dashboard',
    title: 'Tableau de bord',
    icon: 's-dashboard',
    class: '',
  },
  {
    path: 'companies',
    title: 'Liste de Sociétés',
    icon: '-blanket',
    class: '',
  },
  {
    path: 'clients',
    title: 'Liste de Clients',
    icon: '-user',
    class: '',
  },  {
    path: '/notifications',
    title: 'Notifications',
    icon: '-bell',
    class: '',
  },
  {
    path: 'users',
    title: "Liste d'Utilisateurs",
    icon: '-user-circle',
    class: '',
  },

];
@Component({
  templateUrl: './dashboard-entry.component.html',
  styleUrls: ['./dashboard-entry.component.css'],
})
export class DashboardEntryComponent implements OnInit {
  constructor(private router: Router) {}
  menuItems: any[] | undefined;

  onLogout = () => {
    localStorage.setItem('isLoggedIn', '0');
    this.router.navigate(['/auth']);
  };

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  isOpenVar = 'close';
  isOpen = () => {
    if (this.isOpenVar === 'close') {
      this.isOpenVar = 'open';
    } else {
      this.isOpenVar = 'close';
    }
  };

}
