import 'hammerjs';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MbGalleryStubComponent, MbImageOverlayComponent, ReversePipeStub } from 'testing';

import { GalleryService, OverlayService } from '../../store';
import { Photo365Component } from './photo-365.component';

/* tslint:disable:no-unused-variable */
describe('Photo365Component', () => {
  let component: Photo365Component;
  let fixture: ComponentFixture<Photo365Component>;
  let galleryServiceStub: any;
  let overlayServiceStub: any;

  beforeEach(async(() => {

    galleryServiceStub = {};
    overlayServiceStub = {};

    TestBed.configureTestingModule({
      declarations: [
        MbGalleryStubComponent,
        MbImageOverlayComponent,
        Photo365Component,
        ReversePipeStub
      ],
      providers: [
        { provide: GalleryService, useValue: galleryServiceStub },
        { provide: OverlayService, useValue: overlayServiceStub },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Photo365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});