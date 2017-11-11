import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MatToolbarStubComponent, RouterOutletStubComponent } from 'testing';

import { TestingModule } from '../testing/testing.module';
import { AppComponent } from './app.component';

@Component({ selector: 'mb-app-nav-bar', template: '' })
class NavBarStubComponent { }

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MatToolbarStubComponent,
        NavBarStubComponent,
        RouterOutletStubComponent
      ],
    })
      .compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});