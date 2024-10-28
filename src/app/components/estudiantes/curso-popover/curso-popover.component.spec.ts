import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPopoverComponent } from './curso-popover.component';

describe('CursoPopoverComponent', () => {
  let component: CursoPopoverComponent;
  let fixture: ComponentFixture<CursoPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoPopoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
