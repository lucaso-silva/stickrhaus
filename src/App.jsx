import { Routes, Route } from 'react-router-dom';
import {useEffect} from "react";
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Signup from "./pages/Signup.jsx";
import CheckoutPayment from './pages/CheckoutPayment.jsx'
import {useLoggedUser, useLoggedUserDispatch} from "./contexts/LoggedUserContext.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Success from "./pages/Success.jsx"

function App() {
    const dispatch = useLoggedUserDispatch();
    const user = useLoggedUser();
    const api = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${api}/api/auth/me`, {
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
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-checkout-session" element={user ? <CheckoutPayment /> : <Login />} />
          <Route path="/admin" element={<AdminPanel /> } />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/success-order" element={<Success />} />
      </Routes>
  );
}

export default App
