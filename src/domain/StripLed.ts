import {StripLedId} from './StripLedId';
import {Components} from './Components';
import {Led} from './Led';


export abstract class StripLedBuilder {
  private leds: Led[];
  private localId: StripLedId;

  abstract build(): StripLed;

  getLeds() {
    return this.leds;
  }

  getId() {
    return this.localId;
  }

  id(id: StripLedId) {
    this.localId = id;
    return this;
  }

  protected led(...leds: Led[]): StripLedBuilder {
    this.leds = leds;
    return this;

  }
}

export abstract class StripLed {
  readonly id: StripLedId;
  readonly components: Components;

  protected constructor(builder: StripLedBuilder) {
    this.components = builder.getLeds();
    if (builder.getId() === undefined) {
      throw new Error();

    }
    this.id = builder.getId();

  }

  get componentsLength(): number {

    return this.components.length;
  }
}
