import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./themeSlice/themeSlice.ts"

export const store = configureStore({
    reducer: {
        themeReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;