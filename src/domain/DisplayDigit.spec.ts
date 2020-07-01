import {DisplayDigit} from './DisplayDigit';

describe('Display digit ', () => {
  it('should not build with negative value', () => {
    expect(() => DisplayDigit.of(-1)).toThrow(Error);
  });

  it('should not build with one hundred or more', () => {
    expect(() => DisplayDigit.of(100)).toThrow(Error);
  });

  it('should get digit with value between 0 and 99', () => {
    expect(DisplayDigit.of(42).digit).toBe(42);
  });


});
