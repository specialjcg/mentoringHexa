import {StripLed} from './StripLed';
import {StripLed8} from './StripLed8';
import {DisplayDigit} from './DisplayDigit';
import {Color} from './Color';
import {Light} from './Light';

const minimalBuilder = () => StripLed8.builder().id('33bcc458-0676-4ca7-8172-ae0c0284b742');
describe('StripLed8', () => {
  it('should not build without id', () => {
    expect(() => StripLed8.builder().build()).toThrow(Error);
  });
  it('should be a strip led', () => {
    const stripLed8 = minimalBuilder().build();
    expect(stripLed8).toBeInstanceOf(StripLed8);
    expect(stripLed8).toBeInstanceOf(StripLed);
    expect(stripLed8.componentsLength).toBe(8);
    expect(stripLed8.displayDigit).toBeUndefined();
    expect(stripLed8.id).toBe('33bcc458-0676-4ca7-8172-ae0c0284b742');
  });
  it('should have a displayDigit ', () => {
    const stripLed8 = minimalBuilder().displayDigit(55).build();
    expect(stripLed8.displayDigit).toEqual(DisplayDigit.of(55));
  });
  it('should light on the first led', () => {
    const stripLed8 = minimalBuilder().lightOn(1).build();
    const LIGHT_ON = {color: Color.GREEN, lighting: Light.ON};
    const LIGHT_OFF = {color: Color.GREEN, lighting: Light.OFF};
    expect(stripLed8.components).toEqual([LIGHT_ON, LIGHT_OFF, LIGHT_OFF, LIGHT_OFF, LIGHT_OFF, LIGHT_OFF, LIGHT_OFF, LIGHT_OFF]);

  });

});
