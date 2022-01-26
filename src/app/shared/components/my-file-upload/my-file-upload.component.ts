import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription, finalize } from 'rxjs';

@Component({
  selector: 'app-my-file-upload',
  templateUrl: './my-file-upload.component.html',
  styleUrls: ['./my-file-upload.component.css']
})
export class MyFileUploadComponent implements OnInit {

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }

  fileName = '';
  files: any = [];
  uploadProgress!: any;
  uploadSub!: Subscription;
  onFileSelected(event: any) {
    console.log(event);
    const file: File = event.target.files[0];
    console.log(file);
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('thumbnail', file);
      const upload$ = this.http
        .post('/api/thumbnail-upload', formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(finalize(() => this.reset()));
      this.uploadSub = upload$.subscribe((event: any) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event?.total));
        }
      });
    }
    this.files.push(file);
  }
  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    // this.uploadSub = null;
  }
}
