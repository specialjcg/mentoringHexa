import {ShelveRepository} from '../domain/ShelveRepository';
import {ShelveId} from '../domain/ShelveId';
import {AxiosInstance} from 'axios';
import {Shelve} from '../domain/Shelve';
import {RestShelve, toShelve} from './RestShelve';

export class HttpShelveRepository implements ShelveRepository {

  constructor(private axiosInstance: AxiosInstance) {

  }

  get(id: ShelveId): Promise<Shelve> {
    const escapedId = encodeURIComponent(id);
    return this.axiosInstance.get<RestShelve>(`/api/shelves/${escapedId}`).then(response => toShelve(response.data)).catch(() => {
      throw new Error();
    });
  }
}
