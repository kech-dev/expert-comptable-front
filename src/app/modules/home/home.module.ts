import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEntryComponent } from './pages/dashboard-entry/dashboard-entry.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
@NgModule({
  declarations: [
    DashboardEntryComponent,
    UsersComponent,
    DashboardComponent,
    ClientsComponent
  ],
  imports: [CommonModule,SharedModule,HomeRoutingModule],
  exports: [],
})
export class HomeModule {}
