import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3component1Component } from './s3component1.component';

describe('S3component1Component', () => {
  let component: S3component1Component;
  let fixture: ComponentFixture<S3component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
