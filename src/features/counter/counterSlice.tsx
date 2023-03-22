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

                if(typeof current(state.elementsInCart).find(element => element.id == action.payload) === 'undefined') { 

                    state.elementsInCart = [...state.elementsInCart, state.products.products[action.payload-1] ];
                    state.count +=1;

                } else {

                    current(state.elementsInCart).filter((item) => {

                        if (item.id !== state.products.products[action.payload-1].id) {
                            return item;
                        } else {

                            if (item.quantity !== state.products.products[action.payload-1].quantity) {

                                const index = state.elementsInCart.indexOf(item);
                                state.elementsInCart.splice(index, 1, state.products.products[action.payload-1]);

                            }
                            
                        }
                    }

                );

                }

                // console.log((state.elementsInCart))

            }
        }
    }

);


export const { increment, decrement, addElement} = counterSlice.actions;
export default counterSlice.reducer;