import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularFireService } from '../../angularfire.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-nav-bar.component.html',
  selector: 'mb-app-nav-bar',
  styleUrls: ['./app-nav-bar.component.scss']
})
export class AppNavBarComponent {

  constructor(public af: AngularFireService) {
  }
}