import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwellerListComponent } from './dweller-list.component';

describe('DwellerListComponent', () => {
  let component: DwellerListComponent;
  let fixture: ComponentFixture<DwellerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwellerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
