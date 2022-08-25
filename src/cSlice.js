import { createSlice } from "@reduxjs/toolkit";


const cSlice = createSlice({
  name: 'counter',
  initialState: {value:0},
  reducers: {
    up: (state, action) => {
      console.log(action);
      state.value = state.value + action.payload;
    },
    down: (state, action) => {
      state.value = state.value - action.payload;
    }
  }
});

export default cSlice;
export const {up, down} = cSlice.actions;