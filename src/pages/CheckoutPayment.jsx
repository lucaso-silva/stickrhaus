import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import {Button, Container} from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import {useCallback} from "react";
import { useCart } from "../contexts/CartContext.jsx";
import EmptyCart from "../components/Cart/EmptyCart.jsx";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51RgK2N4PJYdvk5e9lYKmrvvOXnHCfDe3aWPBOqJwzV8Ro3uNspAjaEL3I0OyTSqxqVkJsEc2pdTM7DZUHiBlpziB00EtpW0WlS");

export default function CheckoutPayment() {
    const cart = useCart();
    const api = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const fetchClientSecret = useCallback(()=>{
        return fetch(`${api}/api/checkout/create-checkout-session`,{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({cart}),
            credentials: 'include'
        })
            .then((res)=>res.json())
            .then((data)=> data.clientSecret);

    },[]);

    const options = {fetchClientSecret};
    return(
        <Container fluid>
            <Header />
            {cart.length>0 ? (
                <>
                    <h4 className="text-center">Checkout</h4>
                    <div id="checkout">
                        <EmbeddedCheckoutProvider
                            stripe={stripePromise}
                            options={options}
                        >
                            <EmbeddedCheckout/>
                        </EmbeddedCheckoutProvider>
                    </div>
                    <div className="mt-4 mb-3 text-center">
                        <Button onClick={() => navigate('/')}>Return Home</Button>
                    </div>
                </>
            ) : <EmptyCart/>}
            <Footer/>
        </Container>
    )
}