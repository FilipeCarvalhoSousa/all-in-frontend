import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchComponent } from './church.component';

describe('ChurchComponent', () => {
  let component: ChurchComponent;
  let fixture: ComponentFixture<ChurchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChurchComponent]
    });
    fixture = TestBed.createComponent(ChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
