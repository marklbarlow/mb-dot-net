import 'hammerjs';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarStubComponent } from 'testing';
import { RouterLinkStubDirective } from 'testing';

import { AngularFireService } from '../../angularfire.service';
import { AppNavBarComponent } from './app-nav-bar.component';

describe('AppNavBarComponent', () => {
  let component: AppNavBarComponent;
  let fixture: ComponentFixture<AppNavBarComponent>;
  let afServiceStub: any;

  beforeEach(async(() => {

    afServiceStub = {
      auth() { return undefined; }
    };

    TestBed.configureTestingModule({
      declarations: [
        AppNavBarComponent,
        MatToolbarStubComponent,
        RouterLinkStubDirective,
      ],
      providers: [
        { provide: AngularFireService, useValue: afServiceStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});