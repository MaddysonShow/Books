import { configureStore } from '@reduxjs/toolkit';
import {sortReducer} from "./reducers";
import {booksApi} from "./API/booksAPIts";

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath] : booksApi.reducer,
    sortReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware)
});
