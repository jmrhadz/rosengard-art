import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Confirmation from './pages/confirmation';
import Contact from './pages/contact';
import Error from './pages/error';
import Home from './pages/home';
import Shop from './pages/shop';
import Cancel from './pages/cancel';
import Cart from './pages/checkout'
import Orders from './pages/orders';
import { NavHeader,NavFooter } from './components/navbar';
import { CartProvider } from './REST/cartContext';




function App() {
 

  return (
          <>
           <CartProvider>
            <BrowserRouter>
              <NavHeader/>
              <Routes >
                <Route index element={<Home/>}/>
                <Route path="success" element={<Confirmation/>}/>
                <Route path="cancel" element={<Cancel/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route index path="admin/dashboard/orders" element={<Orders/>}>
                  {/* <Route path="new" element={<Orders />}/>
                  <Route path="inprogress" element={<Orders />}/>
                  <Route path="shipped" element={<Orders />}/>
                  <Route path="cancelled" element={<Orders />}/>
                  <Route path="*" element={<Error/>}/> */}
                </Route>
                <Route path="*" element={<Error/>}/>
              </Routes>
              <NavFooter/>
            </BrowserRouter>
          </CartProvider> 
          </>

  );
}

export default App;
