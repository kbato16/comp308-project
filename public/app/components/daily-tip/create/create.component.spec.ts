import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTipCreateComponent } from './create.component';

describe('DailyTipCreateComponent', () => {
  let component: DailyTipCreateComponent;
  let fixture: ComponentFixture<DailyTipCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTipCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTipCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
