import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Confirmation from './pages/confirmation';
import Contact from './pages/contact';
import Error from './pages/error';
import Home from './pages/home';
import Shop from './pages/shop';
import Cancel from './pages/cancel';
import Cart from './pages/checkout';
import Dashboard from './pages/dashboard';
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
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<Error/>}/>
              </Routes>
              <NavFooter/>
            </BrowserRouter>
          </CartProvider> 
          </>

  );
}

export default App;
