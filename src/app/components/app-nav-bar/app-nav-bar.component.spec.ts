import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { RouterLinkStubDirective } from '../../../testing';
import { AppNavBarComponent } from './app-nav-bar.component';
import { AngularFireService } from '../../angularfire.service';

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
        RouterLinkStubDirective,
      ],
      imports: [MaterialModule.forRoot()],
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