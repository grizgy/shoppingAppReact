import './dropDown.css';

const categories = ["Men's clothing", "Women's clothing", "Jewelery", "Electronics", "All categories"] 

function dropDown ()  {

 return ( 
      <div className="dropdown">
      <button className="dropbtn" >Categories</button>
      <div className="dropdown-content">
          {categories.map((category) =><button key={category} >{category}</button>)}
      </div>
    </div>
    );

}





export default dropDown;