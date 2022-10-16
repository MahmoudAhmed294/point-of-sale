import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UiState {
  user: boolean;
}

const initialState: UiState = {
  user: true,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.user = !state.user;
    },
  },
});

export const { login } = loginSlice.actions;
export const user =(state: RootState) => state.login.user
export default loginSlice.reducer;
