import { Image } from './image.interface';

export interface ImageMonth {
    $key?: string;
    month: string;
    images?: Image[];
}