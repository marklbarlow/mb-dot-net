import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ImageMonth } from '../store';

@Injectable()
export class ImagesService {

  private galleries: Observable<ImageMonth[]>;

  constructor(public af: AngularFire) {
    this.galleries = af.database.list('/photo365/galleries').map(x => x.reverse()) as FirebaseListObservable<ImageMonth[]>;
  }
}