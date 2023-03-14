import Header from "./components/header";
import Footer from "./components/footer";
import Item from "./components/item";
import SelectedItem from "./components/selected-item";
import NotFound from "./components/notFound";
import db from "./db.json"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  let database  = db.products;

  return (

    <Router>
 

    <div className="App">

      <div><Header/></div>  

      <Routes>
        <Route path="/" element={<Item products={database}></Item>}></Route>
        <Route path="product/:id" element={<SelectedItem product={database}></SelectedItem>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <div><Footer></Footer></div>
      
    </div>
    </Router>

  );
}


export default App;