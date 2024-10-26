import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewDocenteComponent } from './modal-new-docente.component';

describe('ModalNewDocenteComponent', () => {
  let component: ModalNewDocenteComponent;
  let fixture: ComponentFixture<ModalNewDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalNewDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
