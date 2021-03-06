import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/material/material.module';
import { AuthComponent } from './core/auth/auth.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    MaterialModule,
    SharedModule,
    HomeModule,
    ToastrModule.forRoot({
      timeOut: 80000,
      positionClass: 'toast-top-right',
      closeButton: true,
      easing: 'ease-in',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
