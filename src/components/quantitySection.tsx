import './quantitySection.css';
import React, { useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

function quantitySection  () {

    return  (

        <div className="quantity">

        <div className="form-check-inline">
            <button className="btn"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
        </div>

        <div className="form-check-inline">
            <div className="form-control"/>1
        </div>

        <div className="form-check-inline">
            <button className="btn"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
        </div>

        </div>

);

}




export default quantitySection;