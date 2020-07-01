import {StripLed} from './StripLed';
import {ShelveId} from './ShelveId';

export interface Shelve {
  id: ShelveId;
  stripLeds: StripLed[];
  width: number;
  height: number;

}
