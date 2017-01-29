import { ChangeDetectionStrategy, Component } from '@angular/core';
// import { AngularFire } from 'angularfire2';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-nav-bar.component.html',
  selector: 'mb-app-nav-bar',
  styleUrls: ['./app-nav-bar.component.scss']
})
export class AppNavBarComponent {

  // constructor(public af: AngularFire) {
  // }

  // login() {
  //   this.af.auth.login();
  // }

  // logout() {
  //   this.af.auth.logout();
  // }
}