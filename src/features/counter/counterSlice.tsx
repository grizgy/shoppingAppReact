import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0, 
    products: require ("../../db.json")
}

const  pipipi = require("../../db.json");
console.log(pipipi.products[0].title);

const  counterSlice = createSlice (

    {
        name : 'counter',
        initialState,
        reducers : {
            increment : (state) => {
                state.products.products[3].quantity += 1;
                console.log(state.products.products[3].quantity)
            }, 
            decrement : (state) => {
                state.products.products[3].quantity -= 1;
                console.log(state.products.products[3].quantity)
            },  changeTitle : (state) => {
    
                state.products.products[0].title += "asdsadsad";
                console.log(state.products.products[0].title)
                // state.products.products[0] = "asdfg";

            }
        }
    }

);


// const  productsAmountSlice = createSlice (

//     {
//         name : 'productAmount',
//         initialState : {
//             products: require ("../../db.json"),
//         },
//         reducers : {


//             increment1 : (state) => {
//                 // state.count +=1;

//                 state.products.products[0].title = "asdfg";

//             }


//         }
//     }

// )


export const { increment, decrement, changeTitle} = counterSlice.actions;
export default counterSlice.reducer;

// export const { increment1, decrement1} = productsAmountSlice.actions;
// export default productsAmountSlice.reducer;
