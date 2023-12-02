import './selected-item.css';
import QuantitySection from './quantitySection';
import { useParams } from 'react-router-dom';
import { addElement } from '../features/counter/counterSlice'; 
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from './product';  


function SelectedItem  () {

  const {id} = useParams();
  const productID = Number(id);

  const emptyProduct : Product = {
    id: 0,
    title:'',
    price:0,
    description: '',
    category:'',
    image:'',
    rating:[],
    size:'',
    color:'',
    quantity:0
  }

  const [product, setProduct] = useState<Product>(emptyProduct);
    
  useEffect(() => {
    axios
      .get<Product>(`http://localhost:8080/product/${productID}`)
      .then((res) => setProduct(res.data));
  },[]);

  
  const dispatch = useDispatch();
  // const product = useSelector((state : any )=> state.counter.products);

    return (

      <section className="configurator">

      <div className="preview">
      <div className="sample-wrapper">
        <img src={product.image} alt='preview' id="preview-image" className="sample-frame"></img>
      </div>
      <div className="sample-info label-like">
        <label>
          <strong>{product.title}</strong><br></br>
          <i>{product.description}</i>
          </label>
      </div>
    </div>



    <div className="museum-label label-like" id="config-form">

      <fieldset className="museum-fieldset summary-fieldset">

          <legend>Summary and Submit</legend>
            <div className="form-text-row">
              <label>Price (excl. shipping)</label>
              <label className="sum">€{product.price}</label>
            </div>
            <div className="form-text-row">
                          <QuantitySection id = {productID-1} ></QuantitySection>
                          <label>Total Price:€{(product.quantity*product.price).toFixed(2)}</label> 
            </div>
            <Button  variant="contained" color='primary' className="dropbtn" id="config-submit-button" onClick={() => dispatch(addElement(id))}>Add to Cart</Button>

      </fieldset>
  
    </div>
    
  </section>
  
  );

}


export default SelectedItem;