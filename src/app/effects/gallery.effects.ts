import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import * as images from '../store/actions/images';
import { ImageMonth } from '../store';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

@Injectable()
export class GalleryEffects {
    @Effect()
    loadGallery$: Observable<Action> = this.actions$
        .ofType(images.ActionTypes.LOAD)
        .startWith(new images.LoadAction())
        .switchMap(() => {

            const next$ = this.actions$.ofType(images.ActionTypes.LOAD).skip(1);

            const images$ = this.af.database.list('/photo365/galleries').map(x => x.reverse()) as FirebaseListObservable<ImageMonth[]>;

            return images$.takeUntil(next$)
                .map(images => new images.LoadSuccessAction(images))
                .catch(error => Observable.of(new images.LoadFailAction(error)));
        });

    @Effect()
    saveImage$: Observable<Action> = this.actions$
        .ofType(images.ActionTypes.SAVE_IMAGE)
        .switchMap(() => {

            // this.af.database.list()


            return Observable.of(new images.SaveImageSuccessAction(undefined));
        });

    constructor(private actions$: Actions, public af: AngularFire) {
    }
}