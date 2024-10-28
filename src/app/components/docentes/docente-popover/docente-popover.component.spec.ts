import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentePopoverComponent } from './docente-popover.component';

describe('DocentePopoverComponent', () => {
  let component: DocentePopoverComponent;
  let fixture: ComponentFixture<DocentePopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocentePopoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
