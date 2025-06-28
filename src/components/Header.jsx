import logo from '../img/logo.png';
import {Button, Stack} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    let goToCart = ()=> { navigate("/cart")};
    return (
        <>
            <Stack direction="horizontal" gap={1}>
                <div className="ms-4"><h1><img src={logo} width="230px" alt="StickrHaus logo"/></h1></div>
                <div className="ms-auto"><Button variant="warning">Login</Button></div>
                <div className="me-5">
                    <span onClick={goToCart}><i className="bi bi-cart2 fs-3 ms-3"></i></span>
                    <span className="cart-count">1</span>
                </div>
            </Stack>
            <hr className="border border-primary border-2 opacity-75 my-1 mx-lg-4"/>
        </>
    )
}