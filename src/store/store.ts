import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>; // Тип стану зі стора
export type AppDispatch = typeof store.dispatch; // Тип для діспатча дій