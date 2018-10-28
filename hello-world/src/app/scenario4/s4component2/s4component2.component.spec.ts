import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S4component2Component } from './s4component2.component';

describe('S4component2Component', () => {
  let component: S4component2Component;
  let fixture: ComponentFixture<S4component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S4component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S4component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
