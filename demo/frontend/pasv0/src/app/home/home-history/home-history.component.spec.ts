import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHistoryComponent } from './home-history.component';

describe('HomeHistoryComponent', () => {
  let component: HomeHistoryComponent;
  let fixture: ComponentFixture<HomeHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
