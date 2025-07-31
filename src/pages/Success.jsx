import { useState, useEffect } from "react";
import { Navigate, useSearchParams, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import success_order from "../img/success_order.svg";
import {Button, Container} from 'react-bootstrap';
import { useCartDispatch } from "../contexts/CartContext.jsx";

export default function Success(){
    const [ searchParams ] = useSearchParams();
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
    const navigate = useNavigate();
    const cartDispatch = useCartDispatch();
    const api = import.meta.env.VITE_API_URL;

    const sessionId = searchParams.get('session_id');

    useEffect(() => {
        fetch(`${api}/api/checkout/session_status?session_id=${sessionId}`)
            .then((res) => res.json())
            .then((data) => {
                setStatus(data.status);
                setCustomerEmail(data.customer_email);
                cartDispatch({
                    type: 'clear',
                    cart: []
                });
            });
    }, []);

    if (status === 'open') {
        return (
            <Navigate to="/checkout" />
        )
    }

    if (status === 'complete') {
        return (
            <>
                <Header />
                <Container fluid className="py-4 text-center">
                    <h4>Your order has been placed successfully!</h4>
                    <p>We’re getting your order ready to ship</p>
                    <img src={success_order} alt="Success order image" className="pages_img"/>
                    <p>A confirmation email will be sent to {customerEmail}.</p>
                    <p>If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.</p>
                    <Button onClick={()=>navigate('/')} className="my-4">Continue shopping</Button>
                </Container>
                <Footer />
            </>
        )
    }
    return null;
}
