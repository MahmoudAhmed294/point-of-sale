import { configureStore, ThunkAction ,Action } from "@reduxjs/toolkit";
import {loginSlice} from "./loginSlice";
import {productSlice} from "./productsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


 const store = configureStore({
  reducer: {
    // store
    login: loginSlice.reducer,
    products: productSlice.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(/*reducers*/),
devTools:
  process.env.NODE_ENV !== "production"
  ? {
    actionCreators: {
      ...productSlice.actions,
      ...loginSlice.actions
    },
  }
: false,

});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export default store;
