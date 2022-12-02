import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedList: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.selectedList.length < 13)
        state.selectedList = [...state?.selectedList, ...action.payload];
    },
    del: (state, action) => {
      state.selectedList = state.selectedList.filter(
        (champ) => champ.id !== action.payload,
      );
    },
    reset: (state) => {
      state.selectedList = [];
    },
  },
});

export const { add, del, reset } = counterSlice.actions;

export default counterSlice.reducer;
