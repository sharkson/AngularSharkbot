import { ChatRequest } from './chat-request.model';
import { Chat } from './chat.model';

describe('ChatRequest', () => {
  it('should create an instance', () => {
    expect(new ChatRequest(new Chat('sharkbot', 'hello', 'test-user', Date.now.toString()), 'test', 'test-conversation')).toBeTruthy();
  });
});
