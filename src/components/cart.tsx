import './cart.css';
import { useSelector } from "react-redux";
import CartItem from './cart-item';
import { Link } from 'react-router-dom';

function Cart ()  {

  const cartProducts = useSelector((state : any )=> state.counter);

  return (

    <div>

     <CartItem></CartItem>
     <div className="cart-checkout"> 
       <div className="cart-total-price">Total: &euro; {cartProducts.total.toFixed(2)} </div>
       <Link to={'/checkout'}><button className="cart-checkout-button" type="button">Checkout</button></Link>
     </div>
     
    </div>

    // {!showComponent? <Timer/> : <CountDown/>}
    
    // <div>
    //       <div className="cart-checkout">
    //         <button className="cart-checkout-button" type="button" >Go Shopping !</button>
    //       </div>
    // </div>
    
  
      );

} 





export default Cart;