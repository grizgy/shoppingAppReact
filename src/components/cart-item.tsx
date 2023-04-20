import './cart-item.css';
import { Product } from './product'; 
import QuantitySection from './quantitySection';
import { useSelector, useDispatch } from "react-redux";
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { removeElement} from '../features/counter/counterSlice'; 
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

function CartItem ()  {

    const cartProducts = useSelector((state : any )=> state.counter.elementsInCart);
    const allProducts = useSelector((state : any )=> state.counter.products);
    const dispatch = useDispatch();

    return (
      
        <div> { cartProducts.map((product:Product) =>  
          <div key={product.id} id="cartItem" className="cart-item">
        <div id="cartPic" className="cart-preview">
          <a>
            <img className="cart-thumb sample-frame-1" src={product.image} width="199" height="249" alt="image of the product"></img>
          </a>
        </div>
            <label className="cart-desc">
                <CancelRoundedIcon className="cart-desc-button" type="button" onClick={() => dispatch(removeElement(product.id))} ></CancelRoundedIcon>
                <span className="cart-desc-name">{product.title}</span>
                <span className="cart-desc-text">{product.description}</span>
                <div className="properties">
                  <span className="cart-desc-name">Size: {product.size}</span>
                  <span className="cart-desc-text">Color: {product.color}</span>
                </div>
                <QuantitySection id={product.id-1}></QuantitySection>
                <span className="cart-desc-price"> {allProducts.products[product.id-1].quantity} X &euro; {product.price.toFixed(2)} equals {(allProducts.products[product.id-1].quantity*product.price).toFixed(2)}</span>
            </label>
            </div>)}
      </div>
      
    
        );
  
  } 
  
  
  
  
  
  export default CartItem;