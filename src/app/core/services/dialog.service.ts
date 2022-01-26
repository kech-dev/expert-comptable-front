import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DialogComponent } from 'src/app/shared/ui/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}
  dialogRef!: MatDialogRef<DialogComponent>;

  public open(options: any) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText,
        action: options.action,
      },
    });
  }
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((res) => {
        return res;
      })
    );
  }
}
