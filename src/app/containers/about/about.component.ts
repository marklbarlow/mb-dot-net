import { trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import * as animations from '../../animations';
import { Technology } from './technology.interface';

@Component({
  animations: [
    trigger('itemState', [
      animations.getEnterTransition()
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  selector: 'mb-about',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public list: Technology[] = [
    { done: true, name: 'Angular', url: 'https://angular.io' },
    { done: true, name: 'Angular CLI', url: 'https://cli.angular.io' },
    { done: true, name: 'Angular Material', url: 'https://material.angular.io' },
    { done: true, name: 'Coveralls', url: 'https://coveralls.io/github/marklbarlow/mb-dot-net' },
    { done: true, name: 'Firebase', url: 'https://firebase.google.com' },
    { done: true, name: 'GitHub', url: 'https://github.com/marklbarlow/mb-dot-net' },
    { done: true, name: 'ngrx/store', url: 'https://github.com/ngrx/store' },
    { done: true, name: 'Travis CI', url: 'https://travis-ci.org/marklbarlow/mb-dot-net' },
  ];
}