import {AxiosError, AxiosInstance} from 'axios';
import {SinonStub} from 'sinon';
import * as sinon from 'sinon';

export interface AxiosInstanceStub extends AxiosInstance {
  get: SinonStub;
  put: SinonStub;
  post: SinonStub;
  delete: SinonStub;

}
export const stubAxiosInstance = (): AxiosInstanceStub => ({
  get: sinon.stub(),
  put: sinon.stub(),
  post: sinon.stub(),
  delete: sinon.stub(),
} as any);

export const stubAxiosError = (message: string): AxiosError => ({status: 404, message, stack: `Error: ${message}`} as any);
