import {StripLed, StripLedBuilder} from './StripLed';
import {Led} from './Led';
import {Color} from './Color';
import {Light} from './Light';
import {DisplayDigit} from './DisplayDigit';

const LEDOFF: Led = {color: Color.GREEN, lighting: Light.OFF};
const LEDON: Led = {color: Color.GREEN, lighting: Light.ON};

class StripLed8Builder extends StripLedBuilder {
  private digit?: number;
  private ledOn = new Set<number>();

  constructor() {
    super();

  }

  build() {
    this.led(...Array(8).fill(LEDOFF).map((led, index) => {
      const position = index + 1;
      if (this.ledOn.has(position)) {
        return LEDON;
      }
      return led;
    }));
    return new StripLed8(this);
  }

  displayDigit(digit: number) {
    this.digit = digit;
    return this;
  }

  getDigit(): number | undefined {
    return this.digit;
  }


  lightOn(position: number) {
    this.ledOn.add(position);
    return this;
  }
}

export class StripLed8 extends StripLed {
  readonly displayDigit?: DisplayDigit;

  constructor(builder: StripLed8Builder) {
    super(builder);
    if (builder.getDigit() !== undefined) {
      this.displayDigit = DisplayDigit.of(builder.getDigit());
    }
  }

  static builder() {

    return new StripLed8Builder();
  }

}
