import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "home",
  language: navigator.language.split("-")[0],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    adjustWhichPage: (state, action) => {
      console.log(action.payload);
      state.page = action.payload;
    },
    adjustLanguage: (state, action) => {
      console.log(state.language);
      state.language = action.payload;
    },
  },
});

export const { adjustWhichPage, adjustLanguage } = userSlice.actions;

export const selectWhichPage = (state) => state.user.page;
export const selectLanguage = (state) => state.user.language;

export default userSlice.reducer;
