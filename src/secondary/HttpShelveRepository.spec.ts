import {HttpShelveRepository} from './HttpShelveRepository';
import sinon, {SinonStub} from 'sinon';
import {AxiosError, AxiosInstance} from 'axios';
import {StripLed8} from '../domain/StripLed8';
import {StripLed16} from '../domain/StripLed16';

interface AxiosInstanceStub extends AxiosInstance {
  get: SinonStub;
  put: SinonStub;
  post: SinonStub;
  delete: SinonStub;

}

const stubAxiosInstance = (): AxiosInstanceStub => ({
  get: sinon.stub(),
  put: sinon.stub(),
  post: sinon.stub(),
  delete: sinon.stub(),
} as any);

const stubAxiosError = (message: string): AxiosError => ({status: 404, message, stack: `Error: ${message}`} as any);

describe('HttpShelveRepositort', () => {
  it('should fail to get shelve from Id', (next) => {
    const axiosInstance = stubAxiosInstance();
    axiosInstance.get.rejects(stubAxiosError('No Shelve Found'));
    const repository = new HttpShelveRepository(axiosInstance);
    repository.get('33bcc458-0676-4ca7-8172-ae0c0284b742').catch(error => {
      expect(error).toBeInstanceOf(Error);
      next();
    });
  });
  it('should  get shelve from Id', async () => {
    const axiosInstance = stubAxiosInstance();
    axiosInstance.get.resolves({
      data: {
        shelveId: '33bcc458-0676-4ca7-8172-ae0c0284b742',
        size: {w: 400, h: 200},
        stripLeds: [{stripledId: 'f45d4c79-6ff2-4b40-85dc-03302107f263', nbled: 8}, {
          stripledId: '1c144b42-e1c6-4b04-9041-4d6d05a62243',
          nbled: 16
        }]

      }
    });
    const repository = new HttpShelveRepository(axiosInstance);
    const shelve = await repository.get('33bcc458-0676-4ca7-8172-ae0c0284b742');
    expect(axiosInstance.get.getCall(0).args[0]).toBe('/api/shelves/33bcc458-0676-4ca7-8172-ae0c0284b742');
    expect(shelve).toEqual({
      id: '33bcc458-0676-4ca7-8172-ae0c0284b742',
      stripLeds: [StripLed8.builder().id('f45d4c79-6ff2-4b40-85dc-03302107f263').build(), StripLed16.builder().id('1c144b42-e1c6-4b04-9041-4d6d05a62243').build()],
      width: 400,
      height: 200
    });
  });
});
