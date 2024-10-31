import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ISearchState {
  placeholder: string;
  searchtype: string;
}

const initialState: ISearchState = {
  placeholder: 'Enter search text..',
  searchtype: 'GLOBAL',
};

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchAction: (state, action: PayloadAction | any) => {
      console.log(action);
      switch (action.payload) {
        case '/':
          (state.placeholder = 'Enter search text...'),
            (state.searchtype = 'GLOBAL');
          break;
        case '/orders':
          (state.placeholder = 'Enter order name'),
            (state.searchtype = 'NEW_ORDER');
          break;
        case '/order-completed':
          (state.placeholder = 'Enter order completed name'),
            (state.searchtype = 'ORDER_CANCELLED');
          break;
        case '/order-canceld':
          (state.placeholder = 'Enter order cancelled name'),
            (state.searchtype = 'ORDER_CANCELLED');
          break;
        case '/leads':
          (state.placeholder = 'Enter lead name'), (state.searchtype = 'LEAD');
          break;
        default:
          break;
      }
    },
  },
});

export const { setSearchAction } = SearchSlice.actions;

export default SearchSlice.reducer;
