import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  formVar: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formVar = this.fb.group({
      username: '',
      password: ''
    });
  }
  onSubmit() {
    console.log("value is ",this.formVar.value);
  }
}
