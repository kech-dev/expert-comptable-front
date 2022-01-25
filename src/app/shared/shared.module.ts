import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './ui/dropdown/dropdown.component';
import { MaterialModule } from './material/material.module';
import { MyTableComponent } from './components/my-table/my-table.component';



@NgModule({
  imports: [CommonModule,MaterialModule],
  declarations: [DropdownComponent,MyTableComponent, ],
  exports: [DropdownComponent,MyTableComponent,],
})
export class SharedModule { }
