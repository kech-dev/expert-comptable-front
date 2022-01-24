import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  notifications = ['notification', 'notification2', 'notification3'];
  settings_list = ['cog', 'cog2', 'cog3'];
  constructor() {}

  ngOnInit(): void {}
}
