/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Photo365Component } from './photo-365.component';
import { GalleryService, ImageMonth } from '../../store';
import { MbGalleryStubComponent } from '../../../testing';

describe('Photo365Component', () => {
  let component: Photo365Component;
  let fixture: ComponentFixture<Photo365Component>;
  let galleryServiceStub: any;
  let imagesServiceStub: any;
  let subject = new BehaviorSubject<ImageMonth[]>([]);

  beforeEach(async(() => {

    galleryServiceStub = {

    };

    TestBed.configureTestingModule({
      declarations: [
        MbGalleryStubComponent,
        Photo365Component],
      imports: [MaterialModule.forRoot()],
      providers: [
        { provide: GalleryService, useValue: galleryServiceStub },
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