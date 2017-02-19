import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Image, ImageMonth, GalleryService } from '../../store';
import { AddImageDialogComponent } from '../../components';

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-manage-gallery',
    styleUrls: ['./manage-gallery.component.scss'],
    templateUrl: './manage-gallery.component.html'
})
export class ManageGalleryComponent {

    public images: Image[] = [];

    constructor(
        public galleryService: GalleryService,
        public dialog: MdDialog) {
        galleryService.selectedMonth$.filter(x => x !== undefined).subscribe(x => this.images = x.images);
    }

    public onMonthSelected(month: ImageMonth) {
        this.galleryService.selectMonth(month);
    }

    public onImageAdded() {
        const dialogRef = this.dialog.open(AddImageDialogComponent, {
            disableClose: true,
            height: '600px',
            width: '800px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}