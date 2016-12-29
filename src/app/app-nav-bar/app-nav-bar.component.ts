import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'mb-app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.scss']
})
export class AppNavBarComponent implements OnInit {

  constructor(public af: AngularFire) {
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

  ngOnInit() {
  }

}
