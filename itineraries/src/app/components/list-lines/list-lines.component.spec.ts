import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLinesComponent } from './list-lines.component';

describe('ListLinesComponent', () => {
  let component: ListLinesComponent;
  let fixture: ComponentFixture<ListLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
