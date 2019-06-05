import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRepositoriesComponent } from './no-repositories.component';

describe('NoRepositoriesComponent', () => {
  let component: NoRepositoriesComponent;
  let fixture: ComponentFixture<NoRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
