import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ImageCollection } from './image-collection.interface';

@Injectable()
export class ImagesService {

  public galleries: Observable<ImageCollection[]>;

  constructor(public af: AngularFire) {
    this.galleries = af.database.list('/photo365/galleries').map(x => x.reverse()) as FirebaseListObservable<ImageCollection[]>;
  }
}