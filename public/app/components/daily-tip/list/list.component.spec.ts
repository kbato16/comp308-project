import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTipListComponent } from './list.component';

describe('DailyTipListComponent', () => {
  let component: DailyTipListComponent;
  let fixture: ComponentFixture<DailyTipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
