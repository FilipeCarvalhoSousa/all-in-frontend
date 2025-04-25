import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazilianAutomoveisComponent } from './brazilian-automoveis.component';

describe('BrazilianAutomoveisComponent', () => {
  let component: BrazilianAutomoveisComponent;
  let fixture: ComponentFixture<BrazilianAutomoveisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrazilianAutomoveisComponent]
    });
    fixture = TestBed.createComponent(BrazilianAutomoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
