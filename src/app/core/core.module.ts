import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule,SharedModule],
  declarations: [FooterComponent, NavbarComponent],
  exports: [FooterComponent, NavbarComponent ],
})
export class CoreModule {}
