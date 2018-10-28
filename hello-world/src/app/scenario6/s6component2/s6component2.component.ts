import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-s6component2',
  templateUrl: './s6component2.component.html',
  styleUrls: ['./s6component2.component.css']
})
export class S6component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() child2Value: String;

}
