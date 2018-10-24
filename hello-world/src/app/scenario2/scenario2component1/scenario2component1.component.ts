import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-scenario2component1',
  templateUrl: './scenario2component1.component.html',
  styleUrls: ['./scenario2component1.component.css']
})
export class Scenario2component1Component implements OnInit {

  formVar: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formVar = this.fb.group({
      value: ''
    });
  }
}