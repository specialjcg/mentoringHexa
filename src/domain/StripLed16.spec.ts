import {StripLed} from './StripLed';
import {StripLed16} from './StripLed16';

describe('StripLed16', () => {

  it('should not build without id', () => {
    expect(() => StripLed16.builder().build()).toThrow(Error);
  });

  it('should be a strip led', () => {
    const stripLed16 = StripLed16.builder().id('33bcc458-0676-4ca7-8172-ae0c0284b742').build();
    expect(stripLed16).toBeInstanceOf(StripLed16);
    expect(stripLed16).toBeInstanceOf(StripLed);
    expect(stripLed16.componentsLength).toBe(16);
    expect(stripLed16.id).toBe('33bcc458-0676-4ca7-8172-ae0c0284b742');
  });


});
