import './quantitySection.css';
// import React, { useState, useEffect } from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { increment, decrement} from '../features/counter/counterSlice'; 
import { useSelector, useDispatch } from "react-redux";

function QuantitySection  ({id} : {id:number}) {


    const products = useSelector((state : any )=> state.counter.products);
    const dispatch = useDispatch();

    return  (

        <div className="quantity">

        <div className="form-check-inline">

        <Button className="btn"
            variant="contained"
            aria-label="decrease"
            onClick={() => dispatch(decrement(id))}>
            <RemoveIcon fontSize="small" />
          </Button>
        </div>

        <div className="form-check-inline">
            <div className="form-control"/>{products.products[id].quantity}

        </div>

        <div className="form-check-inline">

        <Button className="btn"
            variant="contained"
            aria-label="increase"
            onClick={() => dispatch(increment(id))}>
            <AddIcon fontSize="small" />
          </Button>
        </div>

        </div>

);

}




export default QuantitySection;