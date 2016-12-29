/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { Photo365Component } from './photo-365.component';

describe('Photo365Component', () => {
  let component: Photo365Component;
  let fixture: ComponentFixture<Photo365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Photo365Component],
      imports: [MaterialModule.forRoot()],
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