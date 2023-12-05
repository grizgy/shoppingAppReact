import Layout from "./components/layout";
import Header from "./components/header";
import Footer from "./components/footer";
import Item from "./components/item";
import SelectedItem from "./components/selected-item";
import Cart from "./components/cart";
import NotFound from "./components/notFound";
import Login from "./components/login";
import {Route, Routes} from 'react-router-dom';
import Register from "./components/register";
import Checkout from "./components/checkout";

function App() {

  return (

    <div className="App">

      <div><Header/></div>  

      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          {/* public routes */}
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="login"element={<Login></Login>}></Route>

            {/* hidden routes */}
            <Route path="/products" element={<Item></Item>}></Route>
            <Route path="product/:id" element={<SelectedItem></SelectedItem>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>

            {/* error, not found route */}
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>

      <div><Footer></Footer></div>
      
    </div>

  );
}


export default App;