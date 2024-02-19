import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
    name: string
};

const initialState: TypeInitialState = {
    name: 'light'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.name = action.payload
        }
    }
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;