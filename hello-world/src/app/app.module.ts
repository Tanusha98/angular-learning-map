import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form } from '@angular/forms';

import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Scenario2component1Component } from './scenario2/scenario2component1/scenario2component1.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Scenario2component1Component
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
