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
    title: 'Les sociétés',
    icon: '-blanket',
    class: '',
  },
  {
    path: 'suivi-all',
    title: 'Suivi du process',
    icon: '-loader',
    class: '',
  },
  {
    path: 'clients',
    title: 'Les clients',
    icon: '-user',
    class: '',
  },
  {
    path: '/notifications',
    title: 'Les notifications',
    icon: '-bell',
    class: '',
  },
  {
    path: 'users',
    title: 'Les utilisateurs',
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
  type_soc: any;

  companies_types=['SARL','SAS','Autre']
  closeSideBar(){
    this.isOpenVar='close';
  }
  openSideBar(){
    this.isOpenVar='open';
  }
}
