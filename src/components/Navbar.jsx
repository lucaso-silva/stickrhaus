
import {useContext} from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {CartContext} from "../contexts/CartContext.jsx";
import {useLoggedUser, useLoggedUserDispatch} from "../contexts/LoggedUserContext.jsx";
import { Link } from "react-router-dom";
import NavLink from "./NavLink.jsx";

export default function Navbar() {
    let navigate = useNavigate();
    let goToCart = ()=> { navigate("/cart")};
    let goToLogin = () => { navigate("/login")};

    const cart = useContext(CartContext);
    const dispatch = useLoggedUserDispatch();
    const user = useLoggedUser();
    // console.log("nav user: ", user);
    const handleLogout = async () =>{
        const res = await fetch('http://localhost:4000/api/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });
        const data = await res.json();
        if(res.ok){
            dispatch({
                type: 'logout',
                loggedUser: null,
            })
        }else{
            alert(data.error);
        }
        navigate('/');
    }

    // let loggedOpt = ""
    // if(user){
    //     if(user.role === 'admin'){
    //         loggedOpt = (
    //             <div className="ms-auto">
    //                 <Link to='/adminpanel'>Admin Panel</Link>
    //                 <Button variant="outline-warning" onClick={handleLogout}>Logout</Button>
    //             </div>
    //         )
    //     }else {
    //         loggedOpt = (
    //             <div className="ms-auto">
    //                 <Link to='/checkoutaddress'>Checkout</Link>
    //                 <Button variant="outline-warning" onClick={handleLogout}>Logout</Button>
    //             </div>
    //         )
    //     }
    // }

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
            <div className="me-5">
                <span onClick={goToCart}><i className="bi bi-cart2 fs-3 ms-3"></i></span>
                <span className="cart-count">{cart.length}</span>
            </div>
        </>
    )
}