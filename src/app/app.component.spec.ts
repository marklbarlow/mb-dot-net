import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { SharedModule } from './shared.module';
import { AppComponent } from './app.component';
import { RouterOutletStubComponent, MdToolbarStubComponent } from '../testing';

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
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});