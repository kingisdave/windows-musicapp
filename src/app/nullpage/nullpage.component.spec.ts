import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullpageComponent } from './nullpage.component';

describe('NullpageComponent', () => {
  let component: NullpageComponent;
  let fixture: ComponentFixture<NullpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
