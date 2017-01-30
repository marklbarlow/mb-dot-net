import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImagesService } from '../../services';
import { GalleryService } from '../../store';

@Component({
    //changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-manage-gallery',
    templateUrl: './manage-gallery.component.html'
})
export class ManageGalleryComponent {

    loadingIndicator = true;

    selectedValue: string;

    columns = [
        { prop: 'month' },
    ];

    constructor(
        private imagesService: ImagesService,
        public galleryService: GalleryService) {
    }
}