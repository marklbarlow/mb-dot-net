import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { AngularFireService } from '../../effects/angularfire.service';
import { Image } from '../../store';

declare var FileReader: any;
declare var document: any;

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-add-image-dialog',
    templateUrl: './add-image-dialog.component.html'
})
export class AddImageDialogComponent {
    public days: string[] = [
        '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
        '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th',
        '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th',
        '31st'
    ];

    @Input() public dayOfMonth: string;
    @Input() public prompt: string;
    @Input() public hidden = false;

    public debug_size_before: any[] = [];
    public debug_size_after: any[] = [];
    public full_srcs: any[] = [];
    public file_srcs: any[] = [];

    constructor(private dialogRef: MdDialogRef<AddImageDialogComponent>) {
    }

    public fileChange(input) {
        this.readFiles(input.files);
    }

    readFiles(files, index = 0) {
        // Create the file reader
        const reader = new FileReader();

        // If there is a file
        if (index in files) {
            // Start reading this file
            this.readFile(files[index], reader, (result) => {
                // Create an img element and add the image file data to it
                const img = document.createElement('img');
                img.src = result;
                this.full_srcs.push(result);

                // Send this img to the resize function (and wait for callback)
                this.resize(img, 250, 250, (resized_jpeg, before, after) => {
                    // For debugging (size in bytes before and after)
                    this.debug_size_before.push(before);
                    this.debug_size_after.push(after);

                    // Add the resized jpeg img source to a list for preview
                    // This is also the file you want to upload. (either as a
                    // base64 string or img.src = resized_jpeg if you prefer a file).
                    this.file_srcs.push(resized_jpeg);

                    // Read the next file;
                    this.readFiles(files, index + 1);


                });
            });
        } else {
            // When all files are done This forces a change detection
            // this.changeDetectorRef.detectChanges();
        }
    }

    readFile(file, reader, callback) {
        reader.onload = () => {
            callback(reader.result);
        };

        reader.readAsDataURL(file);
    }

    resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
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
            url: undefined
        };

        // this.angularFireService.saveImage(image, this.full_srcs[0], this.file_srcs[0]);
        this.dialogRef.close(true);
    }
}