import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosListComponent } from './membros-list.component';

describe('MembrosListComponent', () => {
  let component: MembrosListComponent;
  let fixture: ComponentFixture<MembrosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembrosListComponent]
    });
    fixture = TestBed.createComponent(MembrosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
