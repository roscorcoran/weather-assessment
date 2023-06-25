import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {By} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [RouterModule, RouterTestingModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the element with class content`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appContent = fixture.debugElement.query(By.css('.content'));
    // addItemDebugElement = componentFixture
    expect(appContent).toBeTruthy();
  });

  it('should render router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
