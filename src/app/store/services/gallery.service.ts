import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
import * as manageActions from '../actions/manage';
import { Image, ImageMonth, Month } from '../model';
import { AngularFireService } from '../../angularfire.service';

@Injectable()
export class GalleryService {

    public images$: Observable<ImageMonth[]>;
    public months$: Observable<Month[]>;
    public isLoading$: Observable<boolean>;
    public selectedMonth$: Observable<Month>;
    public imagesForSelectedMonth$: Observable<Image[]>;

    constructor(private store: Store<fromRoot.State>, private afs: AngularFireService) {
        this.images$ = store.select(fromRoot.getImages);
        this.isLoading$ = store.select(fromRoot.getIsLoading);
        this.months$ = store.select(fromRoot.getMonths);
        this.selectedMonth$ = store.select(fromRoot.getSelectedMonth);
        this.imagesForSelectedMonth$ = store.select(fromRoot.getSelectedMonth)
            .filter(x => x !== undefined)
            .mergeMap(month => this.afs.getImagesForMonth(month));
    }

    public selectMonth(month: Month): void {
        this.store.dispatch(new manageActions.SelectMonthAction(month));
    }

    public addMonth(month: string, numberOfDays: number): void {
        this.store.dispatch(new manageActions.AddMonthAction({ month: month, numberOfDays: numberOfDays }));
    }

    public deleteMonth(month: Month): void {
        this.store.dispatch(new manageActions.DeleteMonthAction(month));
    }

    public saveImage(month: Month, image: Image, fullImage: any, thumbnailImage: any) {
        this.store.dispatch(new manageActions.SaveImageAction({
            month: month,
            image: image,
            fullImage: fullImage,
            thumbnailImage: thumbnailImage
        }));
    }

    public deleteImage(month: Month, image: Image) {
        this.store.dispatch(new manageActions.DeleteImageAction({ month: month, image: image }));
    }
}