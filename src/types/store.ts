import { AccountState } from 'Store';

export enum StoreKey {
  ACCOUNT = 'account'
}

export interface DataStore {
  readonly [StoreKey.ACCOUNT]: AccountState;
}
