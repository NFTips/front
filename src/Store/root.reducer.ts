import { AnyAction, combineReducers } from 'redux';
import { accountSlice } from './account.slice';

const reducers = combineReducers({
  [accountSlice.name]: accountSlice.reducer
});

export const rootReducer = (state = reducers(undefined, { type: '' }), action: AnyAction) => {
  switch (action.type) {
    default: {
      return reducers(state, action);
    }
  }
};

export type AppState = ReturnType<typeof rootReducer>;
