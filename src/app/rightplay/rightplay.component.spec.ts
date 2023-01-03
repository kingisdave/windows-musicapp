import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightplayComponent } from './rightplay.component';

describe('RightplayComponent', () => {
  let component: RightplayComponent;
  let fixture: ComponentFixture<RightplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
