import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'mb-photo-365',
  templateUrl: './photo-365.component.html',
  styleUrls: ['./photo-365.component.scss']
})
export class Photo365Component implements OnInit {

   constructor(public af: AngularFire) {
  }

  ngOnInit() {
  }
}
