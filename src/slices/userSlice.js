import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")),
  page: "home",
  language: navigator.language.split("-")[0],
  IsLoginModalOpen: false,
  IsHamburgerMenuOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    adjustWhichPage: (state, action) => {
      state.page = action.payload;
    },
    adjustLanguage: (state, action) => {
      state.language = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    toggleIsLoginModalOpen: (state, action) => {
      state.IsLoginModalOpen = action.payload;
    },
    toogleIsHamburgerMenuOpen: (state, action) => {
      state.IsHamburgerMenuOpen = action.payload;
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
