import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewTemaComponent } from './modal-new-tema.component';

describe('ModalNewTemaComponent', () => {
  let component: ModalNewTemaComponent;
  let fixture: ComponentFixture<ModalNewTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalNewTemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
