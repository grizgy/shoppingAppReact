import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

// const reducerFn = (state = {counter : 0}, action) => {

// }

const store = configureStore (
    {
        reducer : {
            counter : counterReducer
          }
    }
    
)

export default store;