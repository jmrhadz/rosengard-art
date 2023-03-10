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


// The cartprovider wraps everything so that the cart is available no matter where in the app the user is

function App() {
 

  return (
          <div className='overflow-hidden'>
           <CartProvider>
            <BrowserRouter>
              <NavHeader/>
              <div id="main" className='pt-5 mt-2'>
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
              </div>
              <NavFooter/>
            </BrowserRouter>
          </CartProvider> 
          </div>

  );
}

export default App;
