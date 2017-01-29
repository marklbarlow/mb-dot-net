import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
import { LoadAllAction } from '../actions';
import { ImageMonth } from '../model';

@Injectable()
export class GalleryService {

    public images$: Observable<ImageMonth[]>;

    constructor(private store: Store<fromRoot.State>) {
        this.images$ = store.select(fromRoot.getImages);
    }

    public updateImages(images: ImageMonth[]): void {
        this.store.dispatch(new LoadAllAction(images));
    }
}