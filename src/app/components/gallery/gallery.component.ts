import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ImageDialogComponent } from '../image-dialog';
import { Image, ImageMonth } from '../../store';

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-gallery',
    styleUrls: ['./gallery.component.scss'],
    templateUrl: './gallery.component.html',
})
export class GalleryComponent {
    public comingSoonUrl = 'https://firebasestorage.googleapis.com/v0/b/website-a49d3.appspot.com/o/photo365%2Fcoming-soon.jpg?alt=media&token=efa0efa4-4e6d-4bf1-b183-3404e0042707';
    @Input() imageCollection: ImageMonth;

    public opened = false;
    public loading = true;
    public selectedIndex: number;

    constructor(public dialog: MdDialog) {
    }

    public setSelectedImage(index: number) {
        this.selectedIndex = this.imageCollection.images.length - index - 1;
        this.loading = false;
        this.opened = true;
    }

    public getImageUrl(): string {
        return this.getImage().url;
    }

    public getInfoText(): string {
        const image = this.getImage();

        return `${image.prompt} - ${image.dayOfMonth} ${this.imageCollection.month}`;
    }

    private getImage(): Image {
        return this.imageCollection.images[this.selectedIndex];
    }

    public hasNext(): boolean {
        return this.selectedIndex < this.imageCollection.images.length - 1;
    }

    public hasPrevious(): boolean {
        return this.selectedIndex > 0;
    }

    public prevImage() {
        if (this.hasPrevious()) {
            this.loading = true;
            this.selectedIndex--;
            this.loading = false;
        }
    }

    public nextImage() {
        if (this.hasNext()) {
            this.loading = true;
            this.selectedIndex++;
            this.loading = false;
        }
    }

    public closeGallery() {
        this.opened = false;
    }
}