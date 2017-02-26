/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Photo365Component } from './photo-365.component';
import { GalleryService, ImageMonth, OverlayService } from '../../store';
import { MbGalleryStubComponent, MbImageOverlayComponent } from '../../../testing';

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
        Photo365Component],
      imports: [MaterialModule],
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