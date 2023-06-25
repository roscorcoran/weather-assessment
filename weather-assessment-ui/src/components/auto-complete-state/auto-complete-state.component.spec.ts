import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteStateComponent } from './auto-complete-state.component';

xdescribe('AutoCompleteStateComponent', () => {
  let component: AutoCompleteStateComponent;
  let fixture: ComponentFixture<AutoCompleteStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCompleteStateComponent]
    });
    fixture = TestBed.createComponent(AutoCompleteStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
