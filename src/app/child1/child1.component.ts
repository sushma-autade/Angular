import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
  <div style="border:1px solid red;margin:5px;">
    
      hello all its working
    
    </div>
    <ng-content [cstomattr]]></ng-content>
    <ng-content select="header"></ng-content>
    <ng-content select="footer"></ng-content>
    
    <ng-content select=".name"></ng-content>
    <ng-content select=".city"></ng-content>
    
  `,
  styles: []
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
