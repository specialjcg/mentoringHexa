import {StripLedId} from './StripLedId';
import {StripLed} from './StripLed';

export interface StripLedRepository {
  lightOn(id: StripLedId, position: number): Promise<StripLed>;
}
