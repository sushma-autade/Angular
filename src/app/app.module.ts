import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Child1Component } from './child1/child1.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { NewcoponentComponent } from './newcoponent/newcoponent.component';

@NgModule({
  declarations: [
    AppComponent,
    
    Child1Component,
    
    InputDemoComponent,
    
    NewcoponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
