import { configureStore } from '@reduxjs/toolkit';
import ToogleSlice from './toogle-slice';
export const store = configureStore({
  reducer: {
    toogle: ToogleSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
