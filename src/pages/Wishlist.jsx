import empty_list from '../img/empty_list.svg';
import {Button, ListGroup} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { useWishlist } from '../contexts/WishlistContext.jsx';
import {useEffect} from "react";
import FavList from '../components/Wishlist/FavList.jsx'
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

                { wishlist.length === 0 ?
                    <>
                        <h5>Your wishlist is empty</h5>
                        <img src={empty_list} alt="Empty list image" className="pages_img"/>
                        <p>You haven't haven't added any item yet</p>
                    </> :
                    <ListGroup>
                        { wishlist.map(item => <FavList sticker={item} />)
                        }
                    </ListGroup>
                }

            <Button onClick={()=>navigate('/')}>Return</Button>
            </div>
            <Footer/>
        </>
    );
}