import empty_list from '../img/empty_list.svg';
import {Button, Container, Row, Col, ListGroup} from 'react-bootstrap';
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
            <Container>
                <Row>
                    <Col className="text-center">
                        <h4>My Wishlist</h4>
                    </Col>
                </Row>
                <Row className="my-4 justify-content-center">
                    <Col className="text-center" md={9}>
                        {wishlist.length === 0 ?
                            <>
                                <h5>Your wishlist is empty</h5>
                                <img src={empty_list} alt="Empty list image" className="pages_img"/>
                                <h6>You haven't added any item yet</h6>
                            </> :
                            <ListGroup>
                                {
                                    wishlist.map(item => <FavList sticker={item}/>)
                                }
                            </ListGroup>
                        }
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="text-center">
                        <Button onClick={() => navigate('/')}>Return</Button>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </>
    );
}