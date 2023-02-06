import './selected-item.css';
import QuantitySection from './quantitySection';
import { useParams } from 'react-router-dom';
 
function SelectedItem ({product}) {

  const {id} = useParams();

    return (

       
        <section className="configurator">

        <div className="preview">
        <div className="sample-wrapper">
          <img src={product[id-1].image} alt='preview' id="preview-image" className="sample-frame"></img>
        </div>
        <div className="sample-info label-like">
          <label>
            <strong>{product[id-1].title}</strong><br></br>
            <i>{product[id-1].description}</i>
            </label>
        </div>
      </div>



      <form className="museum-label label-like" id="config-form">

        <fieldset className="museum-fieldset summary-fieldset">

            <legend>Summary and Submit</legend>
              <div className="form-text-row">
                <label>Price (excl. shipping)</label>
                <label className="sum">€{product[id-1].price.toFixed(2)}</label>
              </div>
              <div className="form-text-row">
                            <QuantitySection></QuantitySection>
                            <label>Total Price:€{product[id-1].price.toFixed(2)}</label> 
                          </div>
                          <button type="submit" className="dropbtn" id="config-submit-button">Add to Cart</button>

        </fieldset>

      </form>

    </section>
    
    );

}

export default SelectedItem;