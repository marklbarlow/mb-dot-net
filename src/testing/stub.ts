import { Component, Input, Output, Pipe, PipeTransform } from '@angular/core';

@Component({ selector: 'mb-gallery', template: '' })
export class MbGalleryStubComponent {
    @Input() imageCollection: any;
}

@Component({ selector: 'mb-image-overlay', template: '' })
export class MbImageOverlayComponent {
    @Input() hasPrevious: any;
    @Input() hasNext: any;
    @Input() imageText: any;
    @Input() imageUrl: any;
    @Input() loading: any;
    @Output() close: any;
    @Output() showPrevious: any;
    @Output() showNext: any;
    @Output() loadingComplete: any;
}

@Pipe({ name: 'reverse' })
export class ReversePipeStub implements PipeTransform {
    public transform(value: any) {
        return value;
    }
}