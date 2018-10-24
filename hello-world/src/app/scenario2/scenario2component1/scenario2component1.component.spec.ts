import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario2component1Component } from './scenario2component1.component';

describe('Scenario2component1Component', () => {
  let component: Scenario2component1Component;
  let fixture: ComponentFixture<Scenario2component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario2component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
