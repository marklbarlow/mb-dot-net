import { Component, OnInit } from '@angular/core';

interface Technology {
  done: boolean;
  name: string;
  url: string;
}

@Component({
  selector: 'mb-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public list: Technology[] = [
    { done: true, name: 'Angular 2', url: 'https://angular.io' },
    { done: true, name: 'Angular-CLI', url: 'https://cli.angular.io' },
    { done: true, name: 'Angular Material', url: 'https://material.angular.io' },
    { done: true, name: 'Coveralls', url: 'https://coveralls.io/github/marklbarlow/mb-dot-net' },
    { done: false, name: 'Firebase', url: 'https://firebase.google.com' },
    { done: true, name: 'GitHub', url: 'https://github.com/marklbarlow/mb-dot-net' },
    { done: false, name: 'ngrx/store', url: 'https://github.com/ngrx/store' },
    { done: true, name: 'Travis CI', url: 'https://travis-ci.org/marklbarlow/mb-dot-net' },
  ];

  ngOnInit() {
  }
}