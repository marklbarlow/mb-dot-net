import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ImageDialogComponent } from '../image-dialog';
import { Image, ImageMonth } from '../../store';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-gallery',
    styleUrls: ['./gallery.component.scss'],
    templateUrl: './gallery.component.html',
})
export class GalleryComponent {
    public comingSoonUrl = 'https://firebasestorage.googleapis.com/v0/b/website-a49d3.appspot.com/o/photo365%2Fcoming-soon.jpg?alt=media&token=efa0efa4-4e6d-4bf1-b183-3404e0042707';
    @Input() imageCollection: ImageMonth;

    constructor(public dialog: MdDialog) {
    }

    public setSelectedImage(image: Image) {
        // let dialogRef = this.dialog.open(ImageDialogComponent);
        // dialogRef.componentInstance.month = this.imageCollection.month;
        // dialogRef.componentInstance.selectedImage = image;
    }
}