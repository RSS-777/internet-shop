import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    name: string;
    title: string
};

interface IProductState {
    data: IProduct[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
};


export const fetchProduct = createAsyncThunk<IProduct[]>(
    'data/fetchData',
    async () => {
        const response = await fetch('https://dummyjson.com/products/');
        const data = await response.json();
        if (!response.ok) {
            throw new Error('Error data fetch');
        }
        return data.products as IProduct[]
    }
);

const initialState: IProductState = {
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
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.status = 'succeeded';
                state.data = action.payload
                state.error = null;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null
                state.data = [];
            })
    },
})

export default productSlice.reducer;