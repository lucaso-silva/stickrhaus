import logo from '../img/logo.png';
import {Button, Stack} from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    let goToCart = ()=> { navigate("/cart")};
    let goToLogin = () => { navigate("/login")};

    return (
        <>
            <Stack direction="horizontal" gap={1}>
                <div className="ms-4"><Link to="/"><h1><img src={logo} width="230px" alt="StickrHaus logo"/></h1></Link></div>
                <div className="ms-auto"><Button variant="warning" onClick={goToLogin}>Login</Button></div>
                <div className="me-5">
                    <span onClick={goToCart}><i className="bi bi-cart2 fs-3 ms-3"></i></span>
                    <span className="cart-count">1</span>
                </div>
            </Stack>
            <hr className="border border-primary border-2 opacity-75 my-1 mx-lg-4"/>
        </>
    )
}