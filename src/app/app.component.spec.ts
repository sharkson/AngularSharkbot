import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatSidenavModule, MatIconModule, MatNavList, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './navigation/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        SidenavListComponent,
        HeaderComponent,
        LayoutComponent,
        MatNavList,
        
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sharkbot'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sharkbot');
  });
});
