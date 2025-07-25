import {useContext, useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useCart, useCartDispatch} from "../contexts/CartContext.jsx";
import {useLoggedUser, useLoggedUserDispatch} from "../contexts/LoggedUserContext.jsx";
import { Link } from "react-router-dom";
import NavLink from "./NavLink.jsx";

export default function Navbar() {
    const [ numItems, setNumItems ] = useState(0);
    let navigate = useNavigate();
    let goToCart = ()=> { navigate("/cart")};
    let goToLogin = () => { navigate("/login")};

    const cart = useCart();
    const cartDispatch = useCartDispatch();
    const userDispatch = useLoggedUserDispatch();
    const user = useLoggedUser();

    useEffect(()=>{
        setNumItems(cart.reduce((acc,curr)=>{
            return acc += curr.qty;
        },0));
    },[cart])

    const handleLogout = async () =>{
        const res = await fetch('http://localhost:4000/api/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });
        const data = await res.json();
        if(res.ok){
            userDispatch({
                type: 'logout',
                loggedUser: null,
            })
        }else{
            alert(data.error);
        }
        cartDispatch({
            type: 'clear',
            cart: []
        })
        navigate('/');
    }

    return (
        <>
            {!user ? (
                <div className="ms-auto">
                    <Button variant="primary" onClick={goToLogin}>Login</Button>
                </div>
            ) : (
                <div className="ms-auto">
                    <NavLink user={user}/>
                    <Button variant="outline-warning" onClick={handleLogout} className="ms-4">Logout</Button>
                </div>
            )
            }
            <div className="me-5 cart">
                <span onClick={goToCart}><i className="bi bi-cart2 fs-3 ms-3"></i></span>
                {numItems>0 ? <span className="cart-count">{numItems}</span>:""}
            </div>
        </>
    )
}