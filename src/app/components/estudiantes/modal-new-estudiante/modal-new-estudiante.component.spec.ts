import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewEstudianteComponent } from './modal-new-estudiante.component';

describe('ModalNewEstudianteComponent', () => {
  let component: ModalNewEstudianteComponent;
  let fixture: ComponentFixture<ModalNewEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalNewEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
