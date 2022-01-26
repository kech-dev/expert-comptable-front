import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardEntryComponent } from './pages/dashboard-entry/dashboard-entry.component';
import { QAndAComponent } from './pages/q-and-a/q-and-a.component';

const routes: Routes = [
  {
    path: 'admin',
    component: DashboardEntryComponent,
    canActivate: [AuthGuard],
    children: [
      {path:'dashboard',component:DashboardComponent},
      {path:'clients',component:ClientsComponent},
      {path:'users',component:UsersComponent}
    ]
  },
  {
    path: 'QandA',
    component:QAndAComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
