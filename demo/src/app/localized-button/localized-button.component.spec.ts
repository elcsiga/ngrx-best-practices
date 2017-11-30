import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizedButtonComponent } from './localized-button.component';

describe('LocalizedButtonComponent', () => {
  let component: LocalizedButtonComponent;
  let fixture: ComponentFixture<LocalizedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
