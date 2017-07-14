import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { MdToolbarStubComponent, RouterOutletStubComponent } from '../testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';

@Component({ selector: 'mb-app-nav-bar', template: '' })
class NavBarStubComponent { }

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MdToolbarStubComponent,
        NavBarStubComponent,
        RouterOutletStubComponent
      ],
      imports: [SharedModule],
    })
      .compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});