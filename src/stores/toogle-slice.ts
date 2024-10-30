import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface IToogleState {
  isOpen: boolean;
}

const initialState: IToogleState = {
  isOpen: true,
};

export const ToogleSlice = createSlice({
  name: 'toogle',
  initialState,
  reducers: {
    toogleAside: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toogleAside } = ToogleSlice.actions;

export default ToogleSlice.reducer;
