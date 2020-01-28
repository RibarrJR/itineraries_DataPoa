import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotacaoComponent } from './lotacao.component';

describe('LotacaoComponent', () => {
  let component: LotacaoComponent;
  let fixture: ComponentFixture<LotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
