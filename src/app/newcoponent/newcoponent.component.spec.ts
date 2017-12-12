import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcoponentComponent } from './newcoponent.component';

describe('NewcoponentComponent', () => {
  let component: NewcoponentComponent;
  let fixture: ComponentFixture<NewcoponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcoponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
