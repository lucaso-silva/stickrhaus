import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { LoggedUserProvider } from "./contexts/LoggedUserContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <LoggedUserProvider>
          <CartProvider>
              <App />
          </CartProvider>
      </LoggedUserProvider>
  </BrowserRouter>,
)
