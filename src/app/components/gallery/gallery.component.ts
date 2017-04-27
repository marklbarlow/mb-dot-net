import { trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as animations from '../../animations';
import { ImageMonth } from '../../store';

@Component({
    animations: [
        trigger('itemState', [
            animations.getEnterTransition()
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-gallery',
    styleUrls: ['./gallery.component.scss'],
    templateUrl: './gallery.component.html',
})
export class GalleryComponent {
    // tslint:disable-next-line:max-line-length
    public comingSoonUrl = 'https://firebasestorage.googleapis.com/v0/b/website-a49d3.appspot.com/o/photo365%2Fcoming-soon.jpg?alt=media&token=efa0efa4-4e6d-4bf1-b183-3404e0042707';
    @Input() imageCollection: ImageMonth;
    @Output() imageSelected: EventEmitter<number> = new EventEmitter<number>();

    public setSelectedImage(index: number) {
        const selectedIndex = this.imageCollection.images.length - index - 1;
        this.imageSelected.emit(selectedIndex);
    }
}