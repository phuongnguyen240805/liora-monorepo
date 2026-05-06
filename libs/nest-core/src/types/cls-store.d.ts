import { ClsStore as BaseClsStore } from 'nestjs-cls';

export interface ClsStore extends BaseClsStore {
  tenantId?: string;
}