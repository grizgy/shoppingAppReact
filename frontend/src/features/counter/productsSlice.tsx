import { createAsyncThunk, createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { Product } from "../../components/product";
import axios from 'axios';

interface ProductState {
    products : Product[]
  }

const initialState : ProductState = {
    // products: require ("../../db.json"),
    products : [],
    
}

export const fetchProducts = createAsyncThunk ('product/fetchProducts', () => {
    
    return axios
    .get(`http://localhost:8080`)
    .then( (response) => response.data)

})

const productReducer = createSlice ({
    name : 'product',
    initialState,
    reducers : {},
            extraReducers: (builder) => {
            builder.addCase(fetchProducts.pending, (state) => {
                console.log("pending")
            })
            builder.addCase(fetchProducts.fulfilled, (state, action : PayloadAction<Product[]>) => {
                console.log(action.payload)
                state.products = action.payload
                console.log("fulfilled")
                console.log(state.products)
            })
            builder.addCase(fetchProducts.rejected, (state) => {
                console.log("rejected")
            })
        }
})


export default productReducer.reducer;