import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Scenario2component1Component } from './scenario2/scenario2component1/scenario2component1.component';
import { S3component1Component } from './scenario3/s3component1/s3component1.component';
import { S3component2Component } from './scenario3/s3component2/s3component2.component';
import { S4component1Component } from './scenario4/s4component1/s4component1.component';
import { S4component2Component } from './scenario4/s4component2/s4component2.component';
import { S5component1Component } from './scenario5/s5component1/s5component1.component';
import { S5component2Component } from './scenario5/s5component2/s5component2.component';
import { S5component3Component } from './scenario5/s5component3/s5component3.component';
import { S6component1Component } from './scenario6/s6component1/s6component1.component';
import { S6component2Component } from './scenario6/s6component2/s6component2.component';
import { S6component3Component } from './scenario6/s6component3/s6component3.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Scenario2component1Component,
    S3component1Component,
    S3component2Component,
    S4component1Component,
    S4component2Component,
    S5component1Component,
    S5component2Component,
    S5component3Component,
    S6component1Component,
    S6component2Component,
    S6component3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
