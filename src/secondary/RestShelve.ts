import {Shelve} from '../domain/Shelve';
import {RestStripLed, toStripLed} from './RestStripLed';

export interface RestShelve {
  shelveId: string;
  size: { w: number, h: number };
  stripLeds: RestStripLed[];
}

export const toShelve = (restShelve: RestShelve): Shelve => ({
  id: restShelve.shelveId,
  stripLeds: restShelve.stripLeds.map(toStripLed),
  width: restShelve.size.w,
  height: restShelve.size.h,
});
