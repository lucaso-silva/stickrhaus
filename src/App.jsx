import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Signup from "./pages/Signup.jsx";
import CheckoutAddress from './pages/CheckoutAddress.jsx'
import CheckoutPayment from './pages/CheckoutPayment.jsx'
import CheckoutSummary from "./pages/CheckoutSummary.jsx";
import { CartProvider } from "./CartContext.jsx";

function App() {

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
          </Routes>
      </CartProvider>

  );
}

export default App
