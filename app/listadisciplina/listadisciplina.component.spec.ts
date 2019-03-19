import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadisciplinaComponent } from './listadisciplina.component';

describe('ListadisciplinaComponent', () => {
  let component: ListadisciplinaComponent;
  let fixture: ComponentFixture<ListadisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
