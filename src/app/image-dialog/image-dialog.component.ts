import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Image } from '../services/image.interface';

@Component({
    selector: 'mb-image-dialog',
    styleUrls: ['./image-dialog.component.scss'],
    templateUrl: './image-dialog.component.html',
})
export class ImageDialogComponent {
    @Input() public selectedImage: Image;

    constructor(public dialogRef: MdDialogRef<ImageDialogComponent>) {
    }

    public navigate(forward) {
        // let index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
        // if (index >= 0 && index < this.datasource.length) {
        //     this.selectedImage = this.datasource[index];
        // }
    }
}