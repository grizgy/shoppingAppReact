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
import { useSignIn } from "react-auth-kit";
import { useState } from "react";
import axios, { AxiosError } from "axios";


function App() {

  const signIn = useSignIn();
  const [formData, setFormData] = useState({email: '', password: ''})
  const [errorMessage, setErrorMessage] =useState('')


  const onSubmit = async (e : any) => {
    e.preventDefault()

    try {
    const response = await axios.post(
      'http://localhost:8080/auth', 
      formData)


      signIn({
            token: response.data.token,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: {email:formData.email}
        })

        console.log(formData)
    } catch (error) {

      if(error && error instanceof AxiosError) {
        setErrorMessage(error.response?.data.message)
      } else if (error && error instanceof Error) {
        setErrorMessage(error.message)
      }

      console.log("Error: ", error )

    }

}

  return (


<Router>

<form onSubmit={onSubmit}>
            <input type={"email"} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
            <input type={"password"} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>

            <button>Submit</button>
</form>

    <div className="App">

      <div><Header/></div>  

      <Routes>
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
      </Routes>

      <div><Footer></Footer></div>
      
    </div>

</Router>

  );
}


export default App;