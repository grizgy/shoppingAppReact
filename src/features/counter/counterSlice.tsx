import { createSlice, current } from "@reduxjs/toolkit";
import { Product } from "../../components/product";
import React, { useState } from 'react';


interface CounterState {
    count: number,
    products : any,
    elementsInCart : Product [],
    total : number
  }

const initialState : CounterState = {
    count: 0, 
    products: require ("../../db.json"),
    elementsInCart : [],
    total : 0
}

// const  pipipi = require("../../db.json");
// console.log(pipipi.products[0].title);

const  counterSlice = createSlice (

    {
        name : 'counter',
        initialState,
        reducers : {
            increment : (state, action) => {

                // state.elementsInCart.includes(element => element.id < 2)

                state.products.products.filter((product:Product) => {

                    if ((product.id - 1) == action.payload) {
                        product.quantity +=1;

                        // check if the element is already in the cart and if so increment the total price 
                        const index = state.elementsInCart.findIndex(element => element.id === product.id);
                        // console.log(product.id)
                        // console.log(index)
                        // console.log(state.elementsInCart[index])

                        if(typeof state.elementsInCart[index].id !== 'undefined' && state.elementsInCart[index].id == product.id) {
                            state.total += product.price
                            console.log(state.total)
                        }
                    }
            
                   
                });

            }, 
            decrement : (state, action) => {

                state.products.products.filter((product:Product) => {

                    if(state.products.products[action.payload].quantity >= 2) {
                    if ((product.id - 1) == action.payload) {
                        product.quantity -=1;


                        // check if the element is already in the cart and if so increment the total price 
                        const index = state.elementsInCart.findIndex(element => element.id = product.id);
                        // console.log(product.id)
                        // console.log(index)
                        // console.log(state.elementsInCart[index])

                        if(state.elementsInCart[index].id == product.id) {
                            state.total -= product.price
                        }
                    }
                }
            
                });

            }, 

            addElement : (state, action) => {

                if(typeof current(state.elementsInCart).find(element => element.id == action.payload) == 'undefined') { 

                    state.elementsInCart = [...state.elementsInCart, state.products.products[action.payload-1] ];
                    state.count +=1;
                    state.total += (state.products.products[action.payload-1].quantity * state.products.products[action.payload-1].price)

                } else {

                    current(state.elementsInCart).filter((item) => {

                        if (item.id !== state.products.products[action.payload-1].id) {
                            return item;
                        } else {

                            if (item.quantity !== state.products.products[action.payload-1].quantity) {

                                const index = state.elementsInCart.indexOf(item);

                               

                                // remove previous element total
                                state.total -= (item.quantity * state.products.products[action.payload-1].price)

                                // add new  element total
                                state.total += (state.products.products[action.payload-1].quantity * state.products.products[action.payload-1].price)


                                 //to be checked !!! 
                                state.elementsInCart.splice(index, action.payload, state.products.products[action.payload-1]);

                            }
                            
                        }
                    }

                );

                }

                //console.log(current(state.elementsInCart))

            }, 
             removeElement (state, action) {

                const index = current(state.elementsInCart).indexOf(current(state.products.products[action.payload-1]));
                state.elementsInCart.splice(index, 1);
                state.count-=1 ;
                state.total -= (state.products.products[action.payload-1].quantity * state.products.products[action.payload-1].price)
                // console.log(current(state.elementsInCart))
                
            }
        }
    }

);


export const { increment, decrement, addElement, removeElement} = counterSlice.actions;
export default counterSlice.reducer;