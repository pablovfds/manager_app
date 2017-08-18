/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CondosListComponent } from './condos-list.component';

describe('CondosListComponent', () => {
  let component: CondosListComponent;
  let fixture: ComponentFixture<CondosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
