import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Image, GalleryService, Month } from '../../store';
import { AddImageDialogComponent } from '../../components';

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-manage-gallery',
    styleUrls: ['./manage-gallery.component.scss'],
    templateUrl: './manage-gallery.component.html'
})
export class ManageGalleryComponent {

    public images: Image[] = [];
    private month: Month;

    constructor(
        public galleryService: GalleryService,
        public dialog: MdDialog) {
        galleryService.selectedMonth$.filter(x => x !== undefined).subscribe(x => {
            // this.images = x.images ? x.images.map(y => y.$value) : [];
            this.month = x;
        });
    }

    public onMonthSelected(month: Month) {
        this.galleryService.selectMonth(month);
    }

    public onImageAdded() {
        this.openEditDialog();
    }

    public onMonthAdded() {
        this.galleryService.addMonth('Month1');
    }

    public onMonthDeleted() {
        this.galleryService.deleteMonth(this.month);
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
                        imageUrl: undefined,
                        thumbnailUrl: undefined,
                    };
                }

                image.dayOfMonth = dialogRef.componentInstance.dayOfMonth;
                image.hidden = dialogRef.componentInstance.hidden;
                image.prompt = dialogRef.componentInstance.prompt;

                this.galleryService.saveImage(
                    this.month,
                    image,
                    dialogRef.componentInstance.full_srcs[0],
                    dialogRef.componentInstance.file_srcs[0]);
            }
        });
    }
}