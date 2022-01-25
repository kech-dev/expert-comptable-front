import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  notifications = ['notification', 'notification2', 'notification3'];
  settings_list = ['cog', 'cog2', 'cog3'];
  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {
    // this.showSuccess();

  }
  showSuccess() {
    this.toastrService.success('Hello world!', 'Toastr fun!');
    this.toastrService.info('Hello world!', 'Toastr fun!');
    this.toastrService.error('Hello world!', 'Toastr fun!');
    this.toastrService.warning('Hello world!', 'Toastr fun!');
  }

}
