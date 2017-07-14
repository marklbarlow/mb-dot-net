import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AngularFireService } from '../angularfire.service';
import * as gallery from '../store/actions/manage';

@Injectable()
export class ManageEffects {

    @Effect()
    months$: Observable<Action> = this.actions$
        .ofType(gallery.ActionTypes.LOAD_MONTH_LIST)
        .startWith(new gallery.LoadMonthListAction())
        .switchMap(() => {
            const next$ = this.actions$.ofType(gallery.ActionTypes.LOAD_MONTH_LIST).skip(1);
            const obs$ = this.afs.getMonths();

            return obs$.takeUntil(next$)
                .map(months => new gallery.LoadMonthListSuccessAction(months));
        });

    @Effect()
    addMonth$: Observable<Action> = this.actions$
        .ofType(gallery.ActionTypes.ADD_MONTH)
        .map((action: gallery.AddMonthAction) => {
            this.afs.addMonth(action.payload.month, action.payload.numberOfDays);

            return new gallery.AddMonthSuccessAction();
        });

    @Effect()
    deleteMonth$: Observable<Action> = this.actions$
        .ofType(gallery.ActionTypes.DELETE_MONTH)
        .switchMap((action: gallery.DeleteMonthAction) => {

            return this.afs.deleteMonth(action.payload)
                .map(() => new gallery.DeleteMonthSuccessAction());
        });

    @Effect()
    saveImage$: Observable<Action> = this.actions$
        .ofType(gallery.ActionTypes.SAVE_IMAGE)
        .switchMap((action: gallery.SaveImageAction) => {

            return this.afs.saveImage(action.payload.month, action.payload.image, action.payload.fullImage, action.payload.thumbnailImage)
                .map(() => new gallery.SaveImageSuccessAction(undefined));
        });

    @Effect()
    deleteImage$: Observable<Action> = this.actions$
        .ofType(gallery.ActionTypes.DELETE_IMAGE)
        .switchMap((action: gallery.DeleteImageAction) => {
            return this.afs.deleteImage(action.payload.month, action.payload.image)
                .map(() => new gallery.DeleteImageSuccessAction());
        });

    constructor(private actions$: Actions, private afs: AngularFireService) {
    }
}