import './item.css';
import { Link} from "react-router-dom";
import SearchForm from './searchForm';

function Item ({products}) {

    return (
        
      <div>
        
      <SearchForm></SearchForm>
     
      <div className='container'>{products.map((product) => 
        <Link to={`/product/${product.id}`} className="search-item">
              <img className="search-item-img" src={product.image} alt="Selected product"></img>
              <div className="search-item-label">
                <span className="search-item-title">{product.title}</span>
                <span className="search-item-price">Price: €{product.price.toFixed(2)}</span>
              </div>
        </Link>)}
      </div> 

        </div>
      );
        }
        
        
export default Item;        