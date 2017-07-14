import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AngularFireService } from '../angularfire.service';
import * as gallery from '../store/actions/images';

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