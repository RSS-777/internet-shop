import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        theme: themeReducer,
    }
})

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeAppDispatch = typeof store.dispatch;
