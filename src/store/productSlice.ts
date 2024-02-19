import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type TProduct = {
    name: string,
    id: number,
    title: string,
    thumbnail: string,
    category: string,
    brand: string,
    images: string[],
    description: string,
    discountPercentage: number,
    price: number,
    rating: number,
    stock: number
};

export type TypeAddBasket = {
    title: string,
    thumbnail: string,
    price: number,
    count: number,
};

type TInitialProduct = {
    data: TProduct[],
    status: 'idle' | 'loading' | 'succeeded' | 'faild',
    error: string | null,
    product: string,
    basket: TypeAddBasket[],
};

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
    error: null,
    product: '',
    basket: [],
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
        },
        addBasket: (state, action) => {
            const existingProductIndex = state.basket.findIndex(product => product.title === action.payload.title);
            if (existingProductIndex !== -1) {
                state.basket[existingProductIndex].price += action.payload.price
                state.basket[existingProductIndex].count += action.payload.count
            } else {
                state.basket.push(action.payload);
            }
        },
        deleteProductFromBasket: (state, action) => {
            state.basket?.splice(action.payload, 1)
        },
        updateProductInBasket: (state, action) => {
           const {index, updateProduct} = action.payload;
           state.basket[index] = updateProduct
        },
    },
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
export const { setProduct } = productSlice.actions;
export const { addBasket } = productSlice.actions;
export const { deleteProductFromBasket } = productSlice.actions;
export const { updateProductInBasket } = productSlice.actions;