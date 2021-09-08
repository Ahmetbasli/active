import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectItems = (state) => state.basket.items;

export default userSlice.reducer;
