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
        this.openEditDialog();
    }

    public onEditImage(image: Image) {
        this.openEditDialog(image);
    }

    public onDeleteImage(image: Image) {
        console.log('Delete image:', image);
    }

    private openEditDialog(image: Image = undefined) {
        const dialogRef = this.dialog.open(AddImageDialogComponent, {
            disableClose: true,
            height: '400px',
            width: '600px',
        });

        if (image !== undefined) {
            dialogRef.componentInstance.dayOfMonth = image.dayOfMonth;
            dialogRef.componentInstance.hidden = image.hidden;
            dialogRef.componentInstance.prompt = image.prompt;
        }

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (image === undefined) {
                    image = {
                        dayOfMonth: undefined,
                        hidden: false,
                        prompt: undefined,
                        url: undefined,
                    };
                }

                image.dayOfMonth = dialogRef.componentInstance.dayOfMonth;
                image.hidden = dialogRef.componentInstance.hidden;
                image.prompt = dialogRef.componentInstance.prompt;

                this.galleryService.saveImage(image, dialogRef.componentInstance.full_srcs[0], dialogRef.componentInstance.file_srcs[0]);
            }
        });
    }
}