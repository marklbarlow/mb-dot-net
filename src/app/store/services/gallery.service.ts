import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
import * as galleryActions from '../actions/images';
import { Image, ImageMonth, Month } from '../model';

@Injectable()
export class GalleryService {

    public images$: Observable<ImageMonth[]>;
    public months$: Observable<Month[]>;
    public isLoading$: Observable<boolean>;
    public selectedMonth$: Observable<Month>;

    constructor(private store: Store<fromRoot.State>) {
        this.images$ = store.select(fromRoot.getImages);
        this.isLoading$ = store.select(fromRoot.getIsLoading);
        this.months$ = store.select(fromRoot.getMonths);
        this.selectedMonth$ = store.select(fromRoot.getSelectedMonth);
    }

    public selectMonth(month: Month): void {
        this.store.dispatch(new galleryActions.SelectMonthAction(month));
    }

    public addMonth(month: string): void {
        this.store.dispatch(new galleryActions.AddMonthAction(month));
    }

    public deleteMonth(month: Month): void {
        this.store.dispatch(new galleryActions.DeleteMonthAction(month));
    }

    public saveImage(month: Month, image: Image, fullImage: any, thumbnailImage: any) {
        this.store.dispatch(new galleryActions.SaveImageAction({
            month: month,
            image: image,
            fullImage: fullImage,
            thumbnailImage: thumbnailImage
        }));
    }

    public deleteImage() {
    }
}