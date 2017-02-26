import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
import * as galleryActions from '../actions/images';
import { Image, ImageMonth } from '../model';

@Injectable()
export class GalleryService {

    public images$: Observable<ImageMonth[]>;
    public isLoading$: Observable<boolean>;
    public selectedMonth$: Observable<ImageMonth>;

    constructor(private store: Store<fromRoot.State>) {
        this.images$ = store.select(fromRoot.getImages);
        this.isLoading$ = store.select(fromRoot.getIsLoading);
        this.selectedMonth$ = store.select(fromRoot.getSelectedMonth);
    }

    public updateImages(images: ImageMonth[]): void {
        this.store.dispatch(new galleryActions.LoadSuccessAction(images));
    }

    public selectMonth(imageMonth: ImageMonth): void {
        this.store.dispatch(new galleryActions.SelectMonthAction(imageMonth));
    }

    public saveImage(image: Image) {
        this.store.dispatch(new galleryActions.SaveImageAction(image));
    }

    public deleteImage() {
        // this.store.dispatch(new galleryActions.)
    }
}