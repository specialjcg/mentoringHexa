import {Shelve} from './Shelve';
import {ShelveId} from './ShelveId';

export interface ShelveRepository {
  get(id: ShelveId): Promise<Shelve>;

}
