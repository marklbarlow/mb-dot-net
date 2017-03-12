import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as gallery from '../store/actions/images';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/withLatestFrom';

import { AngularFireService } from '../angularfire.service';

@Injectable()
export class GalleryEffects {
    @Effect()
    loadGallery$: Observable<Action> = this.actions$
        .ofType(gallery.ActionTypes.LOAD)
        .startWith(new gallery.LoadAction())
        .switchMap(() => {

            const next$ = this.actions$.ofType(gallery.ActionTypes.LOAD).skip(1);
            const images$ = this.afs.getAllImages();

            return images$.takeUntil(next$)
                .map(images => new gallery.LoadSuccessAction(images))
                .catch(error => Observable.of(new gallery.LoadFailAction(error)));
        });

    constructor(private actions$: Actions, private afs: AngularFireService) {
    }
}