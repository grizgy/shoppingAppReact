import Header from "./components/header";
import Footer from "./components/footer";
import Item from "./components/item";
import SelectedItem from "./components/selected-item";
import Cart from "./components/cart";
import NotFound from "./components/notFound";
import Login from "./components/login";
// import db from "./db.json";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./components/register";
import Checkout from "./components/checkout";

function App() {

  // const db = require("./db.json");
  // let database  = db.products;

  return (

    <Router>

      
 
    <div className="App">

      <div><Header/></div>  

      <Routes>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="login"element={<Login></Login>}></Route>
        <Route path="/" element={<Item></Item>}></Route>
        <Route path="product/:id" element={<SelectedItem></SelectedItem>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <div><Footer></Footer></div>
      
    </div>
    </Router>

  );
}


export default App;