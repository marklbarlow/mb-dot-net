import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleryService, ImageMonth, OverlayService } from '../../store';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-photo-365',
    styleUrls: ['./photo-365.component.scss'],
    templateUrl: './photo-365.component.html',
})
export class Photo365Component {

    constructor(
        public galleryService: GalleryService,
        public overlayService: OverlayService) {
    }

    public onImageSelected(imageMonth: ImageMonth, selectedIndex: number): void {
        this.overlayService.open(imageMonth, selectedIndex);
    }

    public prevImage() {
        this.overlayService.previous();
    }

    public nextImage() {
        this.overlayService.next();
    }

    public closeGallery() {
        this.overlayService.close();
    }
}