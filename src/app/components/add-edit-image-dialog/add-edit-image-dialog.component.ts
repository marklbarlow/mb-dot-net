import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { AngularFireService } from '../../angularfire.service';
import { Image } from '../../store';

declare var FileReader: any;
declare var document: any;

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-add-edit-image-dialog',
    templateUrl: './add-edit-image-dialog.component.html'
})
export class AddEditImageDialogComponent {
    @Input() public dayOfMonth: number;
    @Input() public prompt: string;
    @Input() public hidden = false;
    @Input() public fullImage: any;
    @Input() public days: number[];

    public debug_size_before: any;
    public debug_size_after: any;
    public thumbnailImage: any;

    constructor(
        private dialogRef: MdDialogRef<AddEditImageDialogComponent>,
        private changeDetectorRef: ChangeDetectorRef) {
    }

    public fileChange(input) {
        this.readFiles(input.files);
    }

    public readFiles(files, index = 0) {
        // Create the file reader
        const reader = new FileReader();

        // If there is a file
        if (index in files) {
            // Start reading this file
            this.readFile(files[index], reader, (result) => {
                // Create an img element and add the image file data to it
                const img = document.createElement('img');
                img.src = result;
                this.fullImage = result;

                // Send this img to the resize function (and wait for callback)
                this.resize(img, 250, 250, (resized_jpeg, before, after) => {
                    // For debugging (size in bytes before and after)
                    this.debug_size_before = before;
                    this.debug_size_after = after;

                    // Add the resized jpeg img source to a list for preview
                    // This is also the file you want to upload. (either as a
                    // base64 string or img.src = resized_jpeg if you prefer a file).
                    this.thumbnailImage = resized_jpeg;

                    // Read the next file;
                    this.readFiles(files, index + 1);
                });
            });
        } else {
            // When all files are done This forces a change detection
            this.changeDetectorRef.detectChanges();
        }
    }

    public readFile(file, reader, callback) {
        reader.onload = () => {
            callback(reader.result);
        };

        reader.readAsDataURL(file);
    }

    public resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
        // This will wait until the img is loaded before calling this function
        return img.onload = () => {

            // Get the images current width and height
            let width = img.width;
            let height = img.height;

            // Set the WxH to fit the Max values (but maintain proportions)
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }

            // create a canvas object
            const canvas = document.createElement('canvas');

            // Set the canvas to the new calculated dimensions
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');

            ctx.drawImage(img, 0, 0, width, height);

            // Get this encoded as a jpeg
            // IMPORTANT: 'jpeg' NOT 'jpg'
            const dataUrl = canvas.toDataURL('image/jpeg');

            // callback with the results
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    }

    public onSave(): void {

        const image: Image = {
            dayOfMonth: this.dayOfMonth,
            hidden: this.hidden,
            prompt: this.prompt,
            imageUrl: undefined,
            thumbnailUrl: undefined
        };

        // this.angularFireService.saveImage(image, this.full_srcs[0], this.file_srcs[0]);
        this.dialogRef.close(true);
    }
}