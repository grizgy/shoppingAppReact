import './dropDown.css';

const products = ["Men's clothing", "Women's clothing", "Jewelery", "Electronics", "All categories"] 

function dropDown ()  {

 return ( 
      <div className="dropdown">
      <button className="dropbtn" >Categories</button>
      <div className="dropdown-content">
          {products.map((product) =><button>{product}</button>)}
      </div>
    </div>
    );

}





export default dropDown;