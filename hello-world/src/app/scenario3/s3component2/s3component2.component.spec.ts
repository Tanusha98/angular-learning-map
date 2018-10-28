import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3component2Component } from './s3component2.component';

describe('S3component2Component', () => {
  let component: S3component2Component;
  let fixture: ComponentFixture<S3component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
