import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type TProduct = {
    name: string,
    id: number,
    title: string,
    thumbnail: string,
    category: string,
    brand: string,
    images:string[],
    description: string,
    discountPercentage: number,
    price:number,
    rating: number,
    stock: number
}

type TInitialProduct = {
    data: TProduct[],
    status: 'idle' | 'loading' | 'succeeded' | 'faild',
    error: string | null
}

export const fetchProducts = createAsyncThunk<TProduct[]>(
    'data/productData',
    async () => {
        const rest = await fetch('https://dummyjson.com/products/?limit=50');
        const data = await rest.json();
        if (!rest.ok) {
            throw new Error('Error fetch data')
        }
        return data.products as TProduct[]
    }
);

const initialState: TInitialProduct = {
    data: [],
    status: 'idle',
    error: null
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'succeeded',
                    state.error = null
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.data = [],
                    state.status = 'faild',
                    state.error = action.error.message ?? null
            })
    }
});

export default productSlice.reducer;
