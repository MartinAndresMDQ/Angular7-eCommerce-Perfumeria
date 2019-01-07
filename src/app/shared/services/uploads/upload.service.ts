import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UploadService {
  
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage) { }

  // uploadFile(event) {
  //   const file = event.target.files[0];
  //   const filePath = 'name-your-file-path-here';
  //   const ref = this.storage.ref(filePath);
  //   const task = ref.put(file);
  // }

  uploadFile(event, name) {
    const file = event.target.files[0];
    // const filePath = 'name-your-file-path-here';
    const filePath = name;
    const task = this.storage.upload(filePath, file);
  }

  
  uploadFile2(event, name) {
    const file = event.target.files[0];
    const filePath = name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }
  
}