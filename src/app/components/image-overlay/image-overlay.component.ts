import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-image-overlay',
    styleUrls: ['./image-overlay.component.scss'],
    templateUrl: './image-overlay.component.html',
})
export class ImageOverlayComponent {
    @Input() hasPrevious = false;
    @Input() hasNext = false;
    @Input() imageText: string;
    @Input() imageUrl: string;
    @Output() close: EventEmitter<void> = new EventEmitter<void>();
    @Output() showPrevious: EventEmitter<void> = new EventEmitter<void>();
    @Output() showNext: EventEmitter<void> = new EventEmitter<void>();
    loading = false;

    public prevImage(): void {
        this.showPrevious.emit();
    }

    public nextImage(): void {
        this.showNext.emit();
    }

    public onClose(): void {
        this.close.emit();
    }
}