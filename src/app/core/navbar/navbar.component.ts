import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from '../services/dialog.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  notifications = ['notification', 'notification2', 'notification3'];
  settings_list = ['cog', 'cog2', 'cog3'];
  constructor(private toastrService: ToastrService,private dialogService: DialogService) {}

  ngOnInit(): void {
    // this.showSuccess();

  }
  showSuccess() {
    this.toastrService.success('Hello world!', 'Toastr fun!');
    this.toastrService.info('Hello world!', 'Toastr fun!');
    this.toastrService.error('Hello world!', 'Toastr fun!');
    this.toastrService.warning('Hello world!', 'Toastr fun!');
  }
  handleClick() {
    const options = {
      title: 'Confirmation ?',
      message: 'Are U sure , you want to delete this ?',
      cancelText: 'Non',
      confirmText: 'Oui',
      action:'warn'
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
       if (confirmed) {
         console.log(confirmed);
         this.showSuccess();
          }
        });
  }
}
