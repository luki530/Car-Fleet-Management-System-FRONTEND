import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlogsComponent } from './carlogs.component';

describe('CarlogsComponent', () => {
  let component: CarlogsComponent;
  let fixture: ComponentFixture<CarlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
