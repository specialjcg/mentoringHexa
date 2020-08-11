import {AxiosInstance} from 'axios';
import {StripLedId} from '../domain/StripLedId';
import {StripLed} from '../domain/StripLed';
import {StripLedRepository} from '../domain/StripLedRepository';
import {RestStripLed, toStripLed} from './RestStripLed';

export class HttpStripLedRepository implements StripLedRepository {
  constructor(private axiosInstance: AxiosInstance) {
  }

  lightOn(id: StripLedId, position: number): Promise<StripLed> {
    return this.axiosInstance.put<RestStripLed>(`/api/led/${id}`).then(
      (response) => toStripLed(response.data)
  ).
    catch(error => {
      throw new Error(error.message);
    });
  }
}
