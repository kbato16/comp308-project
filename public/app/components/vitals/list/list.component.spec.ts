import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalsListComponent } from './list.component';

describe('VitalsListComponent', () => {
  let component: VitalsListComponent;
  let fixture: ComponentFixture<VitalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
