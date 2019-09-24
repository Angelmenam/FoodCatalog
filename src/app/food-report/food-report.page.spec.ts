import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodReportPage } from './food-report.page';

describe('FoodReportPage', () => {
  let component: FoodReportPage;
  let fixture: ComponentFixture<FoodReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
