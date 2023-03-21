import { createSlice, current } from "@reduxjs/toolkit";
import { Product } from "../../components/product";


interface CounterState {
    count: number,
    products : any,
    elementsInCart : Product []
  }

const initialState : CounterState = {
    count: 0, 
    products: require ("../../db.json"),
    elementsInCart : []
}

// const  pipipi = require("../../db.json");
// console.log(pipipi.products[0].title);

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

            }, 

            addElement : (state, action) => {
                if ( current(state.elementsInCart).includes(current(state.products.products[action.payload-1]))) {
                    console.log(current(state.elementsInCart));
                } else {
                    state.elementsInCart = [...state.elementsInCart, state.products.products[action.payload-1] ];
                    state.count +=1;
                }

            }
        }
    }

);


export const { increment, decrement, addElement} = counterSlice.actions;
export default counterSlice.reducer;