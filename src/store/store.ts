import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';

export const store = configureStore({
    reducer: {
        products: productReducer
    }
})

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeAppDispatch = typeof store.dispatch;