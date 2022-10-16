import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  drawer: {
    open: boolean;
  };
}

const initialState: UiState = {
  drawer: {
    open: true,
  },
};

export const productSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
  },
});

export const {  } = productSlice.actions;

export default productSlice.reducer;
