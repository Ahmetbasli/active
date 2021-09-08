import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "home",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    adjustWhichPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { adjustWhichPage } = userSlice.actions;

export const selectWhichPage = (state) => state.user.page;

export default userSlice.reducer;
