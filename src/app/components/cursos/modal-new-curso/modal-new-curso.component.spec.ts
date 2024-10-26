import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewCursoComponent } from './modal-new-curso.component';

describe('ModalNewCursoComponent', () => {
  let component: ModalNewCursoComponent;
  let fixture: ComponentFixture<ModalNewCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalNewCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
