import { Message } from './message.model';

describe('Message', () => {
  it('should create an instance', () => {
    expect(new Message('test', 'user')).toBeTruthy();
  });
});
