import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import themeReducer from './themeSlice';
import loginReducer from "./loginSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        theme: themeReducer,
        login: loginReducer,
    }
})

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeAppDispatch = typeof store.dispatch;
