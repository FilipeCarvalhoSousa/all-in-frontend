import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmAcaiComponent } from './sm-acai.component';

describe('SmAcaiComponent', () => {
  let component: SmAcaiComponent;
  let fixture: ComponentFixture<SmAcaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmAcaiComponent]
    });
    fixture = TestBed.createComponent(SmAcaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
