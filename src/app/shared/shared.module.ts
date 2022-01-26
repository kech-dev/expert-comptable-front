import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './ui/dropdown/dropdown.component';
import { MaterialModule } from './material/material.module';
import { MyTableComponent } from './components/my-table/my-table.component';
import { MyStepperComponent } from './components/my-stepper/my-stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyTabComponent } from './components/my-tab/my-tab.component';
import { DialogComponent } from './ui/dialog/dialog.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [DropdownComponent, MyTableComponent, MyStepperComponent, MyTabComponent, DialogComponent],
  exports: [DropdownComponent, MyTableComponent, MyStepperComponent, MyTabComponent, DialogComponent],
  entryComponents: [DialogComponent],
})
export class SharedModule {}
