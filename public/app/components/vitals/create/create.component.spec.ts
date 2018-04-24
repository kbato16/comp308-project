import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalsCreateComponent } from './create.component';

describe('VitalsCreateComponent', () => {
  let component: VitalsCreateComponent;
  let fixture: ComponentFixture<VitalsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
