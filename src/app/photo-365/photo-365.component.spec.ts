/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Photo365Component } from './photo-365.component';
import { ImageCollection, ImagesService } from '../services';
import { MbGalleryStubComponent } from '../../testing';

describe('Photo365Component', () => {
  let component: Photo365Component;
  let fixture: ComponentFixture<Photo365Component>;
  let imagesServiceStub: any;
  let subject = new BehaviorSubject<ImageCollection[]>([]);

  beforeEach(async(() => {

    imagesServiceStub = {
      galleries: subject.asObservable()
    };

    TestBed.configureTestingModule({
      declarations: [
        MbGalleryStubComponent,
        Photo365Component],
      imports: [MaterialModule.forRoot()],
      providers: [{ provide: ImagesService, useValue: imagesServiceStub }],
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