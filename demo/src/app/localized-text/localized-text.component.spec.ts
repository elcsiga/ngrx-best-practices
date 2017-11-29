import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizedTextComponent } from './localized-text.component';

describe('LocalizedTextComponent', () => {
  let component: LocalizedTextComponent;
  let fixture: ComponentFixture<LocalizedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
