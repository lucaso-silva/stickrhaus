import {useEffect, useState} from "react";
import {Button, Dropdown, DropdownMenu} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useCart, useCartDispatch} from "../contexts/CartContext.jsx";
import {useLoggedUser, useLoggedUserDispatch} from "../contexts/LoggedUserContext.jsx";
import NavLink from "./NavLink.jsx";

export default function Navbar() {
    const [ numItems, setNumItems ] = useState(0);
    const navigate = useNavigate();
    let goToCart = ()=> { navigate("/cart")};
    let goToLogin = () => { navigate("/login")};

    const cart = useCart();
    const cartDispatch = useCartDispatch();
    const userDispatch = useLoggedUserDispatch();
    const user = useLoggedUser();
    const api = import.meta.env.VITE_API_URL;

    useEffect(()=>{
        setNumItems(cart.reduce((acc,curr)=>{
            return acc += curr.qty;
        },0));
    },[cart])

    const handleLogout = async () =>{
        const res = await fetch(`${api}/api/auth/logout`, {
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
            <div className="ms-auto">
                <div className="d-none d-md-block">
                    {!user ? (
                        <div>
                                <Button variant="primary" onClick={goToLogin}>Login</Button>
                        </div>
                    ) : (
                        <div className="ms-auto">
                            <NavLink user={user}/>
                            <Button variant="outline-warning" onClick={handleLogout} className="ms-4">Logout</Button>
                        </div>
                    )
                    }
                </div>
                <div className="d-md-none">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-primary">
                            <i className="bi bi-list"></i>
                        </Dropdown.Toggle>
                        <DropdownMenu>
                            {
                                !user ? <Dropdown.Item onClick={goToLogin}>Login</Dropdown.Item> : (
                                    <>
                                        <Dropdown.Item>{<NavLink user={user}/>}</Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                    </>
                                )}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <div className="me-5 cart" data-testid="cart-info">
                <span onClick={goToCart}><i className="bi bi-cart2 fs-3 ms-3"></i></span>
                {numItems>0 ? <span className="cart-count">{numItems}</span>:""}
            </div>
        </>
    )
}