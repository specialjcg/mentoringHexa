import {StripLed} from '../domain/StripLed';
import {StripLed8} from '../domain/StripLed8';
import {StripLed16} from '../domain/StripLed16';

export interface RestStripLed {
  stripledId: string;
  nbled: number;
}

export const toStripLed = (restStripLed: RestStripLed): StripLed => {
  if (restStripLed.nbled === 8) {
    return StripLed8.builder().id(restStripLed.stripledId).build();
  }
  return StripLed16.builder().id(restStripLed.stripledId).build();
};
