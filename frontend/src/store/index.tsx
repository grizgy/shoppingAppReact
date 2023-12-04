import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/counter/productsSlice';


const store = configureStore (
    {
        reducer : {
            counter : counterReducer,
            products : productReducer
          }
    }
    
)

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch