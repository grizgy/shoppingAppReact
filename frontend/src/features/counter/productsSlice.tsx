import { createAsyncThunk, createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { Product } from "../../components/product";
import axios from 'axios';

interface ProductState {
    products : Product[],
    isloading : boolean
  }

const initialState : ProductState = {
    // products: require ("../../db.json"),
    products : [],
    isloading : true
}

export const fetchProducts = createAsyncThunk ('products/fetchProducts', async () => {
    
    return axios
    .get(`http://localhost:8080/products`)
    .then( (response) => response.data)

})

const productsSlice = createSlice ({
    name : 'products',
    initialState,
    reducers : {},
            extraReducers: (builder) => {
            builder.addCase(fetchProducts.pending, (state) => {
                state.isloading = true;
                console.log("pending")
            })
            builder.addCase(fetchProducts.fulfilled, (state, action : PayloadAction<Product[]>) => {
                state.isloading = false;
                state.products = action.payload
                console.log("fulfilled")
            })
            builder.addCase(fetchProducts.rejected, (state) => {
                state.isloading = false;
                console.log("rejected")
            })
        }
})


export default productsSlice.reducer;