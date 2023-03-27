import './cart-item.css';
import { Product } from './product'; 
import QuantitySection from './quantitySection';
import { useSelector, useDispatch } from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { removeElement} from '../features/counter/counterSlice'; 

function CartItem ()  {

    const cartProducts = useSelector((state : any )=> state.counter.elementsInCart);
    const dispatch = useDispatch();

    return (
      
        <div id="cartItem" className="cart-item" > { cartProducts.map((product:Product) =>  
          <div key={product.id}>
        <div id="cartPic" className="cart-preview">
          <a>
            <img className="cart-thumb sample-frame-1" src={product.image} width="199" height="249" alt="image of the product"></img>
          </a>
        </div>
            <label className="cart-desc">
                <button className="cart-desc-button" type="button"><FontAwesomeIcon icon={faTimes} onClick={() => dispatch(removeElement(product.id))}></FontAwesomeIcon></button>
                <span className="cart-desc-name">{product.title}</span>
                <span className="cart-desc-text">{product.description}</span>
                <div className="properties">
                  <span className="cart-desc-name">Size: {product.size}</span>
                  <span className="cart-desc-text">Color: {product.color}</span>
                </div>
                <QuantitySection id={product.id-1}></QuantitySection>
                <span className="cart-desc-price"> {product.quantity} X &euro; {product.price.toFixed(2)} equals {(product.quantity*product.price).toFixed(2)}</span>
            </label>
            </div>)}
      </div>
      
    
        );
  
  } 
  
  
  
  
  
  export default CartItem;