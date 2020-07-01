import {StripLed, StripLedBuilder} from './StripLed';
import {Led} from './Led';
import {Color} from './Color';
import {Light} from './Light';

const LEDOFF: Led = {color: Color.GREEN, lighting: Light.OFF};

class StripLed16Builder extends StripLedBuilder {
  constructor() {
    super();
    this.led(...Array(16).fill(LEDOFF));
  }

  build() {

    return new StripLed16(this);
  }

}

export class StripLed16 extends StripLed {
  constructor(builder: StripLed16Builder) {
    super(builder);
  }

  static builder() {

    return new StripLed16Builder();
  }

}
