import './quantitySection.css';
// import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

import { increment, decrement} from '../features/counter/counterSlice'; 
import { useSelector, useDispatch } from "react-redux";

function QuantitySection  ({id} : {id:number}) {


    const products = useSelector((state : any )=> state.counter.products);
    const dispatch = useDispatch();

    return  (

        <div className="quantity">

        <div className="form-check-inline">
            <button className="btn"><FontAwesomeIcon icon={faMinus} onClick={() => dispatch(decrement(id))}></FontAwesomeIcon></button>
        </div>

        <div className="form-check-inline">
            <div className="form-control"/>{products.products[id].quantity}

        </div>

        <div className="form-check-inline">
            <button className="btn"><FontAwesomeIcon icon={faPlus} onClick={() => dispatch(increment(id))}></FontAwesomeIcon></button>
        </div>

        </div>

);

}




export default QuantitySection;