import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAppState } from './selectors';

export interface AccountState {
  subscribed: boolean;
  canTip: boolean;
}

const initialState: AccountState = {
  subscribed: false,
  canTip: false
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setSubscribed: (state, action: PayloadAction<boolean>) => {
      return { ...state, subscribed: action.payload };
    },
    setCanTip: (state, action: PayloadAction<boolean>) => {
      return { ...state, canTip: action.payload };
    }
  }
});

export const { setSubscribed, setCanTip } = accountSlice.actions;

export const getAccount = createSelector([getAppState], s => s.account);
