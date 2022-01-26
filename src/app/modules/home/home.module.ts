import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEntryComponent } from './pages/dashboard-entry/dashboard-entry.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { QAndAComponent } from './pages/q-and-a/q-and-a.component';
@NgModule({
  declarations: [
    DashboardEntryComponent,
    UsersComponent,
    DashboardComponent,
    ClientsComponent,
    QAndAComponent
  ],
  imports: [CommonModule,SharedModule,HomeRoutingModule,MaterialModule,FormsModule],
  exports: [],
})
export class HomeModule {}
