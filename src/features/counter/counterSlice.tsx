import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/product";

const initialState = {
    // count: 0, 
    products: require ("../../db.json")
}


const  pipipi = require("../../db.json");
console.log(pipipi.products[0].title);

const  counterSlice = createSlice (

    {
        name : 'counter',
        initialState,
        reducers : {
            increment : (state, action) => {

                state.products.products.filter((product:Product) => {

                    if ((product.id - 1) == action.payload) {
                        product.quantity +=1;
                    }
            
                });

            }, 
            decrement : (state, action) => {

                state.products.products.filter((product:Product) => {

                    if(state.products.products[action.payload].quantity >= 2) {
                    if ((product.id - 1) == action.payload) {
                        product.quantity -=1;
                    }
                }
            
                });

            }
        }
    }

);


export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;