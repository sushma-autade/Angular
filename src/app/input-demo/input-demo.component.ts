import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css']
})
export class InputDemoComponent implements OnInit {
 @Input() name;
 @Input() show;
  constructor() { }

  ngOnInit() {
  }

}
