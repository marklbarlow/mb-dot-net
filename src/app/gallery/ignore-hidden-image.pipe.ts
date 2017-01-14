import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../services';

@Pipe({
    name: 'ignoreHiddenImage'
})
export class IgnoreHiddenImagePipe implements PipeTransform {
    public transform(images: Image[]) {
        return images.filter(image => !image.hidden);
    }
}