import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'mb-image-dialog',
    styleUrls: ['./image-dialog.component.scss'],
    templateUrl: './image-dialog.component.html',
})
export class ImageDialogComponent {
    @Input() public imageUrl: string;

    constructor(public dialogRef: MdDialogRef<ImageDialogComponent>) {
    }
}