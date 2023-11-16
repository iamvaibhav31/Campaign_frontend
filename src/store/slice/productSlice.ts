import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getProducts } from '../actions/productAction';
import { RootState } from '../Index';


const initialState: { Data: any[], status: 'idle' | 'loading' | 'successful' | 'failed', error: null | string } = {
    Data: [],
    status: 'idle', // idle | loading | successful | failed
    error: null
}

const ProductSlice = createSlice({
    name: "producct",
    initialState,
    reducers: {
        selectProduct: (state, action: PayloadAction<{ index: number }>) => {
            state.Data = state.Data.map((ele, ind) => {
                if (ind === action.payload.index) {
                    ele.selected = true
                } else {
                    ele.selected = false
                }
                return ele
            })
        }


    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.status = 'loading'
            console.log(action.payload)
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            if (action?.payload?.response?.status !== 404) {
                const productData = action?.payload?.data?.products?.map((ele: any) => {
                    ele.selected = false
                    return ele;
                })
                state.Data = productData
                state.status = 'successful'
            } else {
                state.error = action?.payload?.response?.message || "Unable to fetch the Products"
                state.status = 'failed'
            }

        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.error = action?.error?.message || "Unable to fetch the Products"
            state.status = 'failed'
        })
    },
})

export const { selectProduct } = ProductSlice.actions

export const getAllProducts = (state: RootState) => state.product.Data
export const getProductsStatus = (state: RootState) => state.product.status
export const getProductsError = (state: RootState) => state.product.error

export default ProductSlice.reducer