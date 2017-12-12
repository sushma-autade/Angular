import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Child1Component } from './child1/child1.component';
import { InputDemoComponent } from './input-demo/input-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    
    Child1Component,
    
    InputDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
