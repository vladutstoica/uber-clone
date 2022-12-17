import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";

export const store = configureStore({
    reducer: {
        nav: navSlice
    }
})

// Infer the `RootState` types from the store itself
export type RootState = ReturnType<typeof store.getState>