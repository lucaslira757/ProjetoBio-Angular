import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListainteresseComponent } from './listainteresse.component';

describe('ListainteresseComponent', () => {
  let component: ListainteresseComponent;
  let fixture: ComponentFixture<ListainteresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListainteresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListainteresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
