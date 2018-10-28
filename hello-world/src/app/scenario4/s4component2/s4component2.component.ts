import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-s4component2',
  templateUrl: './s4component2.component.html',
  styleUrls: ['./s4component2.component.css']
})
export class S4component2Component implements OnInit {
  formVar: FormGroup;
  constructor() { }
  @Output() childEvent = new EventEmitter<String>();
  ngOnInit() {  }
  onSubmit(childValue) {
    console.log(childValue);
    this.childEvent.emit(childValue);
  }
}