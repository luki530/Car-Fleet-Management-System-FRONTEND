import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteloggerdeviceComponent } from './deleteloggerdevice.component';

describe('DeleteloggerdeviceComponent', () => {
  let component: DeleteloggerdeviceComponent;
  let fixture: ComponentFixture<DeleteloggerdeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteloggerdeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteloggerdeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
