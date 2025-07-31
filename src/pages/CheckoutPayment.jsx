import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import PaymentInfo from "../components/PaymentInfo.jsx";
import {Breadcrumb, Container} from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import {useCallback} from "react";
import { useCart } from "../contexts/CartContext.jsx";
import {data} from "react-router-dom";
import EmptyCart from "../components/EmptyCart.jsx";

const stripePromise = loadStripe("pk_test_51RgK2N4PJYdvk5e9lYKmrvvOXnHCfDe3aWPBOqJwzV8Ro3uNspAjaEL3I0OyTSqxqVkJsEc2pdTM7DZUHiBlpziB00EtpW0WlS");

export default function CheckoutPayment() {
    const cart = useCart();
    console.log("payment: ",cart);
    const fetchClientSecret = useCallback(()=>{
        return fetch("http://localhost:4000/api/checkout/create-checkout-session",{
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
            {/*<Breadcrumb className="text-center">*/}
            {/*    <Breadcrumb.Item href="/checkoutaddress">Shipping info</Breadcrumb.Item>*/}
            {/*    <Breadcrumb.Item href="/checkoutpayment" linkProps={{content: "var(--bs-breadcrumb-divider, '\-')"}}>Payment info</Breadcrumb.Item>*/}
            {/*    <Breadcrumb.Item href="/checkoutsummary">Confirm order</Breadcrumb.Item>*/}
            {/*</Breadcrumb>*/}
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
                </>
            ) : <EmptyCart/>}
            <Footer/>
        </Container>
    )
}