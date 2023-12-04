import './selected-item.css';
import QuantitySection from './quantitySection';
import { useParams } from 'react-router-dom';
import { addElement } from '../features/counter/counterSlice'; 
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../features/counter/hooks';
import { fetchProducts } from '../features/counter/productsSlice';

function SelectedItem  () {

  const {id} = useParams();
  const productID = Number(id);

  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => {return state.products});
  const product = productState.products[productID-1];
  useEffect( () => {
      dispatch(fetchProducts())
  },[]);

  console.log(productState.isloading)

    return (

      <div>

      {!productState.isloading &&  <section className="configurator">

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
    
  </section>}
    </div>
  
  );

}


export default SelectedItem;