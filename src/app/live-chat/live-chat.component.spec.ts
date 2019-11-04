import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChatComponent } from './live-chat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LiveChatComponent', () => {
  let component: LiveChatComponent;
  let fixture: ComponentFixture<LiveChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveChatComponent ],
      imports: [ ReactiveFormsModule, MatFormFieldModule, HttpClientModule, MatInputModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
