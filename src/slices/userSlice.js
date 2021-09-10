import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  page: "home",
  language: navigator.language.split("-")[0],
  IsLoginModalOpen: false,
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
    toggleIsLoginModalOpen: (state, action) => {
      state.IsLoginModalOpen = action.payload;
    },
  },
});

export const {
  adjustWhichPage,
  adjustLanguage,
  setUser,
  toggleIsLoginModalOpen,
} = userSlice.actions;

export const selectWhichPage = (state) => state.user.page;
export const selectLanguage = (state) => state.user.language;
export const selectUser = (state) => state.user.user;
export const selectIsLoginModalOpen = (state) => state.user.IsLoginModalOpen;

export default userSlice.reducer;
