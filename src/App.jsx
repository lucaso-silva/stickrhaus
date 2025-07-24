import { Routes, Route } from 'react-router-dom';
import { useEffect} from "react";
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Signup from "./pages/Signup.jsx";
import CheckoutAddress from './pages/CheckoutAddress.jsx'
import CheckoutPayment from './pages/CheckoutPayment.jsx'
import CheckoutSummary from "./pages/CheckoutSummary.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import {useLoggedUserDispatch, LoggedUserProvider} from "./contexts/LoggedUserContext.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

function App() {
    const dispatch = useLoggedUserDispatch();

    useEffect(() => {
        fetch('http://localhost:4000/api/auth/me', {
            credentials: 'include',
        })
            .then(res=>res.ok ? res.json() : null)
            .then(data => {
                dispatch({
                    type: 'login',
                    loggedUser: data,
                });
            });
    }, []);

  return (
      <CartProvider>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/checkoutaddress" element={<CheckoutAddress />} />
              <Route path="/checkoutpayment" element={<CheckoutPayment />} />
              <Route path="/checkoutsummary" element={<CheckoutSummary />} />
              <Route path="/adminpanel" element={<AdminPanel />} />
          </Routes>
      </CartProvider>

  );
}

export default App
