import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoProfileComponent } from './no-profile.component';

describe('NoProfileComponent', () => {
  let component: NoProfileComponent;
  let fixture: ComponentFixture<NoProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
