import './item.css';
import { Link} from "react-router-dom";
import SearchForm from './searchForm';
import { Product } from './product';  
import { useAppSelector, useAppDispatch } from '../features/counter/hooks';
import { useEffect } from 'react';
import { fetchProducts } from '../features/counter/productsSlice';

function Item ()  {

      const dispatch = useAppDispatch();
      const allProducts = useAppSelector((state) => {return state.products});
      useEffect( () => {
          dispatch(fetchProducts())
      },[]);

      return      (
        <div>
          
        <SearchForm></SearchForm>
   
        <div className='container'>{allProducts.products.map((product:Product) => 
          <Link key={product.id} to={`/product/${product.id}`} className="search-item">
                <img className="search-item-img" src={product.image} alt="Selected product"></img>
                <div className="search-item-label">
                  <span className="search-item-title">{product.title}</span>
                  <span className="search-item-price">Price: €{product.price}</span>
                </div>
          </Link>)}
        </div> 
  
          </div>
        );


}
        
export default Item;        