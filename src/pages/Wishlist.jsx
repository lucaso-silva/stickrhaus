import empty_list from '../img/empty_list.svg';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { useWishlist } from '../contexts/WishlistContext.jsx';
import {useEffect} from "react";
import under_construction from "../img/under_construction.svg";

export default function Wishlist(){
    const navigate = useNavigate();
    const wishlist = useWishlist();

    useEffect(()=>{
        console.log(wishlist);

    }, [wishlist]);

    return(
        <>
            <Header />
            <h4>My Wishlist</h4>
            <div className="text-center p-5 d-flex flex-column justify-content-center align-items-center gap-4">
                {/*<h4>Your wishlist is empty</h4>*/}
                {/*<img src={empty_list} alt="Empty list image" className="pages_img"/>*/}
                {/*<p>You haven't haven't added any item yet</p>*/}
                {/*<Button onClick={() => navigate('/')}>Home</Button>*/}
                <h4>Oops! This page isn't ready yet.</h4>
                <img src={under_construction} alt="Under development image" className="pages_img"/>
                <Button onClick={() => navigate('/')}>Return</Button>
            </div>
            <Footer/>
        </>
    )
}