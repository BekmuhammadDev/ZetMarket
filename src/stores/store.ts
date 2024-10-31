import { configureStore } from '@reduxjs/toolkit';
import ToogleSlice from './toogle-slice';
import SearchSlice from './search-slice';

export const store = configureStore({
  reducer: {
    toogle: ToogleSlice,
    search: SearchSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
