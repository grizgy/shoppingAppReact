import './selected-item.css';
import QuantitySection from './quantitySection';
import { useParams } from 'react-router-dom';
import { addElement } from '../features/counter/counterSlice'; 
import { useSelector, useDispatch } from 'react-redux';


function SelectedItem  () {

  const {id} = useParams();
  const dispatch = useDispatch();
  const productID = Number(id);
  const product = useSelector((state : any )=> state.counter.products);

    return (

      <section className="configurator">

      <div className="preview">
      <div className="sample-wrapper">
        <img src={product.products[productID-1].image} alt='preview' id="preview-image" className="sample-frame"></img>
      </div>
      <div className="sample-info label-like">
        <label>
          <strong>{product.products[productID-1].title}</strong><br></br>
          <i>{product.products[productID-1].description}</i>
          </label>
      </div>
    </div>



    <div className="museum-label label-like" id="config-form">

      <fieldset className="museum-fieldset summary-fieldset">

          <legend>Summary and Submit</legend>
            <div className="form-text-row">
              <label>Price (excl. shipping)</label>
              <label className="sum">€{product.products[productID-1].price.toFixed(2)}</label>
            </div>
            <div className="form-text-row">
                          <QuantitySection id = {productID-1} ></QuantitySection>
                          <label>Total Price:€{(product.products[productID-1].quantity*product.products[productID-1].price).toFixed(2)}</label> 
            </div>
            <button className="dropbtn" id="config-submit-button" onClick={() => dispatch(addElement(id))}>Add to Cart</button>

      </fieldset>
  
    </div>
    
  </section>
  
  );

}


export default SelectedItem;