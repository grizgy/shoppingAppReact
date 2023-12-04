import { createSlice, current, PayloadAction, createAsyncThunk  } from "@reduxjs/toolkit";
import { Product } from "../../components/product";
import axios from 'axios';

interface CounterState {
    count: number,
    products : any,
    elementsInCart : Product [],
    total : number
  }

const initialState : CounterState = {
    count: 0, 
    products: require ("../../db.json"),
    // products : [],
    elementsInCart : [],
    total : 0
}

export const fetchProducts = createAsyncThunk ('counter/fetchProducts', async () => {
    
    return axios
    .get(`http://localhost:8080`)
    .then( (response) => response.data)

})


const counterSlice = createSlice (

    {
        name : 'counter',
        initialState,
        reducers : {
            increment : (state, action : PayloadAction<number>) => {

                state.products.products.filter((product:Product) => {

                    if ((product.id - 1) === action.payload) {
                        product.quantity +=1;

                        // check if the element is already in the cart and if so increment the total price 
                        const index = state.elementsInCart.findIndex(element => element.id === product.id);

                        if(typeof state.elementsInCart[index] !== 'undefined' && state.elementsInCart[index].id === product.id) {
                            state.total += product.price
                        }
                    }
            
                   return true

                });

            }, 
            decrement : (state, action : PayloadAction<number>) => {

                state.products.products.filter((product:Product) => {

                    if(state.products.products[action.payload].quantity >= 2) {
                    if ((product.id - 1) === action.payload) {
                        product.quantity -=1;


                        // check if the element is already in the cart and if so increment the total price 
                        const index = state.elementsInCart.findIndex(element => element.id === product.id);

                        if(typeof state.elementsInCart[index] !== 'undefined' && state.elementsInCart[index].id === product.id) {
                            state.total -= product.price
                        }
                    }
                }

                return true
            
                });

            }, 

            addElement : (state, action : PayloadAction<any>) => {

                //to be checked
                if(typeof current(state.elementsInCart).find(element => element.id == action.payload) == 'undefined') { 

                    state.elementsInCart = [...state.elementsInCart, state.products.products[action.payload-1] ];
                    state.count +=1;
                    state.total += (state.products.products[action.payload-1].quantity * state.products.products[action.payload-1].price)

                } else {

                    current(state.elementsInCart).filter((item) => {

                        if (item.id === state.products.products[action.payload-1].id) {

                            if (item.quantity !== state.products.products[action.payload-1].quantity) {

                                const index = state.elementsInCart.findIndex(element => element.id === item.id);

                                // remove previous element total
                                state.total -= (state.products.products[action.payload-1].quantity * state.products.products[action.payload-1].price)

                                // add new  element total
                                state.total += (state.products.products[action.payload-1].quantity * state.products.products[action.payload-1].price)


                                 //to be checked !!! 
                                state.elementsInCart.splice(index, 1, state.products.products[action.payload-1]);

                            }
                            
                        }
                        return true
                    }

                );
                console.log(current(state.elementsInCart))
                }


            }, 
             removeElement (state, action : PayloadAction<number>) {

                const index = state.elementsInCart.findIndex(element => element.id === action.payload);
                state.elementsInCart.splice(index, 1);
                state.count-=1 ;
                const removedElement = state.products.products[action.payload-1];
                state.total -= (removedElement.quantity * removedElement.price)
                removedElement.quantity = 1;

            }
        }
    }

);


export const { increment, decrement, addElement, removeElement} = counterSlice.actions;
export default counterSlice.reducer;