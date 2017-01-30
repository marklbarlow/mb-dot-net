import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleryService } from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mb-photo-365',
  styleUrls: ['./photo-365.component.scss'],
  templateUrl: './photo-365.component.html',
})
export class Photo365Component {

  constructor(public galleryService: GalleryService) {
  }
}