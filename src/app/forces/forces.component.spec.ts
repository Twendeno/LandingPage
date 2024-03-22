import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcesComponent } from './forces.component';

describe('ForcesComponent', () => {
  let component: ForcesComponent;
  let fixture: ComponentFixture<ForcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForcesComponent]
    });
    fixture = TestBed.createComponent(ForcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
