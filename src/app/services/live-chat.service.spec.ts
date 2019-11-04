import { TestBed } from '@angular/core/testing';

import { LiveChatService } from './live-chat.service';
import { HttpClientModule } from '@angular/common/http';

describe('LiveChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: LiveChatService = TestBed.get(LiveChatService);
    expect(service).toBeTruthy();
  });
});
