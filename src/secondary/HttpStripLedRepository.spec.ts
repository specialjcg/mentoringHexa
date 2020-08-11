import {stubAxiosError, stubAxiosInstance} from './AxiosInstanceStub';
import {HttpStripLedRepository} from './HttpStripLedRepository';
import {RestStripLed} from './RestStripLed';


describe('HttpStripLedRepository', () => {
  it(' should fail to ligth on', (next) => {
    const axiosInstance = stubAxiosInstance();
    axiosInstance.put.rejects(stubAxiosError('no Led Found'));
    const repository = new HttpStripLedRepository(axiosInstance);
    repository.lightOn('33bcc458-0676-4ca7-8172-ae0c0284b742', 5).catch(error => {
      expect(error).toBeInstanceOf(Error);
      next();
    });
  });
  it('should light On', async () => {
    const axiosInstance = stubAxiosInstance();
    const restStripLed: RestStripLed = {
      nbled: 8,
      stripledId: '33bcc458-0676-4ca7-8172-ae0c0284b742'

    };
    axiosInstance.put.resolves({data: restStripLed});
    const repository = new HttpStripLedRepository(axiosInstance);
    const stripLed = await repository.lightOn('33bcc458-0676-4ca7-8172-ae0c0284b742', 5);
    expect(axiosInstance.put.getCall(0).args[0]).toBe('/api/led/33bcc458-0676-4ca7-8172-ae0c0284b742');
    expect(stripLed.id).toEqual('33bcc458-0676-4ca7-8172-ae0c0284b742');

  });



});
