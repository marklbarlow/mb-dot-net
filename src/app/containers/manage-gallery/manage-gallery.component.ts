import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Image, GalleryService, Month } from '../../store';
import { AddEditImageDialogComponent, AddEditMonthDialogComponent } from '../../components';


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-manage-gallery',
    styleUrls: ['./manage-gallery.component.scss'],
    templateUrl: './manage-gallery.component.html'
})
export class ManageGalleryComponent {

    private selectedMonth: Month;
    private usedDays: number[] = [];

    constructor(
        public galleryService: GalleryService,
        public dialog: MdDialog) {
        galleryService.selectedMonth$.filter(x => x !== undefined).subscribe(month => this.selectedMonth = month);
        galleryService.imagesForSelectedMonth$.subscribe(x => this.setUsedDays(x));
    }

    public onMonthSelected(month: Month) {
        this.galleryService.selectMonth(month);
    }

    public onImageAdded() {
        this.openEditImageDialog();
    }

    public onMonthAdded() {
        this.openEditMonthDialog();
    }

    public onMonthEdited() {
        this.openEditMonthDialog(this.selectedMonth);
    }

    public onMonthDeleted() {
        this.galleryService.deleteMonth(this.selectedMonth);
    }

    public onEditImage(image: Image) {
        this.openEditImageDialog(image);
    }

    public onDeleteImage(image: Image) {
        this.galleryService.deleteImage(this.selectedMonth, image);
    }

    private openEditMonthDialog(month: Month = undefined) {
        const dialogRef = this.dialog.open(AddEditMonthDialogComponent, {
            disableClose: true,
            height: '400px',
            width: '600px',
        });

        if (month) {
            dialogRef.componentInstance.month = month.name;
            dialogRef.componentInstance.numberOfDays = month.numberOfDays;
        }

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.galleryService.addMonth(dialogRef.componentInstance.month, dialogRef.componentInstance.numberOfDays);
            }
        });
    }

    private openEditImageDialog(image: Image = undefined) {
        const dialogRef = this.dialog.open(AddEditImageDialogComponent, {
            disableClose: true,
            height: '400px',
            width: '600px',
        });



        if (image !== undefined) {
            dialogRef.componentInstance.dayOfMonth = image.dayOfMonth;
            dialogRef.componentInstance.hidden = image.hidden;
            dialogRef.componentInstance.prompt = image.prompt;
        }

        dialogRef.componentInstance.days = this.createArray(this.selectedMonth.numberOfDays, dialogRef.componentInstance.dayOfMonth);

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
                    this.selectedMonth,
                    image,
                    dialogRef.componentInstance.fullImage,
                    dialogRef.componentInstance.thumbnailImage);
            }
        });
    }

    private setUsedDays(images: Image[]): void {
        const days: number[] = [];

        images.forEach(x => days.push(x.dayOfMonth));

        this.usedDays = days;
    }

    private createArray(maxValue: number, currentDay: number = undefined): number[] {
        const returnValue: number[] = [];

        for (let i = 1; i <= maxValue; i++) {
            if (currentDay === i || this.usedDays.indexOf(i) < 0) {
                returnValue.push(i);
            }
        }

        return returnValue;
    }
}