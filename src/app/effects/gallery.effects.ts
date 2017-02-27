import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import * as gallery from '../store/actions/images';
import { Image, ImageMonth } from '../store';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import * as firebase from 'firebase';

@Injectable()
export class GalleryEffects {
    @Effect()
    loadGallery$: Observable<Action> = this.actions$
        .ofType(gallery.ActionTypes.LOAD)
        .startWith(new gallery.LoadAction())
        .switchMap(() => {

            const next$ = this.actions$.ofType(gallery.ActionTypes.LOAD).skip(1);
            const images$ = this.getImages();

            return images$.takeUntil(next$)
                .map(images => new gallery.LoadSuccessAction(images))
                .catch(error => Observable.of(new gallery.LoadFailAction(error)));
        });

    @Effect()
    saveImage$: Observable<Action> = this.actions$
        .ofType(gallery.ActionTypes.SAVE_IMAGE)
        .switchMap(action => {

            this.saveImage(undefined, undefined, undefined);

            return Observable.of(new gallery.SaveImageSuccessAction(undefined));
        });

    private storage: firebase.storage.Reference;

    constructor(
        private actions$: Actions,
        public af: AngularFire) {
        this.storage = firebase.storage().ref();
    }

    private getImages(): FirebaseListObservable<ImageMonth[]> {
        return this.af.database.list('/photo365/galleries').map(x => x.reverse()) as FirebaseListObservable<ImageMonth[]>;
    }

    private saveImage(image: Image, fullImage: any, thumbnailImage: any): void {
        const path = 'images/test.jpg';
        const thumbnail = 'thumbnail/test.jpg';

        this.storage.child(path)
            .putString(fullImage)
            .then(fullImageUpload => {
                this.storage.child(thumbnail)
                    .putString(thumbnailImage)
                    .then(thumbnailUpload => {
                        image.url = fullImageUpload.downloadURL;
                        this.getImages().push(image);
                    });
            });
    }
}