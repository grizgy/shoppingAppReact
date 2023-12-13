import Header from "./components/header";
import Footer from "./components/footer";
import Item from "./components/item";
import SelectedItem from "./components/selected-item";
import Cart from "./components/cart";
import NotFound from "./components/notFound";
import Login from "./components/login";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./components/register";
import Checkout from "./components/checkout";
import { RequireAuth } from "react-auth-kit";

function App() {

  return (


<Router>

    <div className="App">

      <Routes>

          {/* hidden routes */}
          <Route path="login"element={<Login></Login>}></Route>

          <Route path={'/products'} element={
              <RequireAuth loginPath={'/login'} >
                <>
                  <Header/>
                  <Item/>
                </>
              </RequireAuth>
          }/>

          <Route path="product/:id" element={
              <RequireAuth loginPath={'/login'} >
                <>
                  <Header/>
                  <SelectedItem/>
                </>
              </RequireAuth>
          }/>


          <Route path="/cart" element={
              <RequireAuth loginPath={'/login'} >
                <>
                  <Header/>
                  <Cart/>
                </>
              </RequireAuth>
          }/>

          <Route path="/checkout" element={
              <RequireAuth loginPath={'/login'} >
                <>
                  <Header/>
                  <Checkout/>
                </>
              </RequireAuth>
          }/>

        
          {/* public routes */}
            <Route path="register" element={<Register></Register>}></Route>

            {/* error, not found route */}
            <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>

      <div><Footer></Footer></div>
      
    </div>

</Router>

  );
}


export default App;