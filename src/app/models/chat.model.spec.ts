import { Chat } from './chat.model';

describe('Chat', () => {
  it('should create an instance', () => {
    expect(new Chat('sharkbot', 'hello world', 'test-user', Date.now.toString())).toBeTruthy();
  });
});
