import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecarComponent } from './deletecar.component';

describe('DeletecarComponent', () => {
  let component: DeletecarComponent;
  let fixture: ComponentFixture<DeletecarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
