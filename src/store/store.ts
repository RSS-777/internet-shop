import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import loginReducer from "./loginSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        login: loginReducer,
    }
})

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeAppDispatch = typeof store.dispatch;
