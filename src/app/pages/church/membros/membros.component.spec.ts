import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosComponent } from './membros.component';

describe('MembrosComponent', () => {
  let component: MembrosComponent;
  let fixture: ComponentFixture<MembrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembrosComponent]
    });
    fixture = TestBed.createComponent(MembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
