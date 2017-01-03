import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ImageDialogComponent } from '../image-dialog';
import { ImagesService } from '../services/images.service';
import { ImageCollection } from '../services/image-collection.interface';

@Component({
    selector: 'mb-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    public imageCollection: ImageCollection;

    constructor(
        public dialog: MdDialog,
        public imagesService: ImagesService) {
        this.imageCollection = imagesService.getImages();
    }

    setSelectedImage(imageUrl: string) {
        let dialogRef = this.dialog.open(ImageDialogComponent);
        dialogRef.componentInstance.imageUrl = imageUrl;

        dialogRef.afterClosed().subscribe(result => {
            //this.selectedOption = result;
        });
    }

    ngOnInit() {
    }
}