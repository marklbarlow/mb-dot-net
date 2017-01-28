/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ImageCollection } from './image-collection.interface';
import { ImagesService } from './images.service';

describe('ImagesService', () => {
  let angularFireStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFire, useValue: angularFireStub }],
    });
  });

  it('should ...', inject([AngularFire], (angularFire: AngularFire) => {
    expect(angularFire).toBeTruthy();
  }));
});
