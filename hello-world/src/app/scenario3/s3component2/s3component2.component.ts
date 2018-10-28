import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-s3component2',
  templateUrl: './s3component2.component.html',
  styleUrls: ['./s3component2.component.css']
})
export class S3component2Component implements OnInit {

  constructor() { }
  @Input() childValue: string;
  ngOnInit() {
  }

}
