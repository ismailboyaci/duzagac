import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ITheme {
    selectedTheme: string;
}

const initialState: ITheme = {
    selectedTheme: 'dark'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<string>) => {
            state.selectedTheme = action.payload;
        }
    }
});

export const { changeTheme } = themeSlice.actions;
export const themeSelector = (state: RootState) => state.themeReducer;
export default themeSlice.reducer;