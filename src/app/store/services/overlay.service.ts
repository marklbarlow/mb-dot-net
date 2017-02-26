import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
import * as overlay from '../actions/overlay';
import { ImageMonth } from '../model';

@Injectable()
export class OverlayService {

    public hasNext$: Observable<boolean>;
    public hasPrevious$: Observable<boolean>;
    public imageText$: Observable<string>;
    public imageUrl$: Observable<string>;
    public isOpen$: Observable<boolean>;

    constructor(private store: Store<fromRoot.State>) {
        this.hasNext$ = store.select(fromRoot.getHasNext);
        this.hasPrevious$ = store.select(fromRoot.getHasPrevious);
        this.imageText$ = store.select(fromRoot.getImageText);
        this.imageUrl$ = store.select(fromRoot.getImageUrl);
        this.isOpen$ = store.select(fromRoot.getIsOpen);
    }

    public close(): void {
        this.store.dispatch(new overlay.OverlayCloseAction());
    }

    public next(): void {
        this.store.dispatch(new overlay.OverlayNextAction());
    }

    public open(imageMonth: ImageMonth, index: number): void {
        this.store.dispatch(new overlay.OverlayOpenAction({ imageMonth: imageMonth, index: index }));
    }

    public previous(): void {
        this.store.dispatch(new overlay.OverlayPreviousAction());
    }
}