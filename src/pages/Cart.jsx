import Header from '../components/Header/Header.jsx'
import {Button, Container, Row, Col, ListGroup} from "react-bootstrap";
import ItemCart from "../components/Cart/ItemCart.jsx";
import CartSummary from "../components/Cart/CartSummary.jsx";
import Footer from "../components/Footer/Footer.jsx"
import { useCart } from "../contexts/CartContext.jsx";
import EmptyCart from "../components/Cart/EmptyCart.jsx"
import { useNavigate } from "react-router-dom";

export default function Cart(){
    const cart = useCart();
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Container>
                {cart.length> 0 ? (
                    <Row>
                        <Col className="text-center">
                            <h4 className="my-4">Your Cart</h4>
                        </Col>
                    </Row>
                ):("")}

                    {cart.length===0 ? (
                        <EmptyCart />
                        ):(
                            <>
                                <Row className="my-2 justify-content-center">
                                    <Col md={9} lg={5}>
                                        <ListGroup className="mb-2">
                                            {cart.map((item) => <ItemCart key={item.id}
                                                                          sticker={item}
                                            />)}
                                        </ListGroup>
                                    </Col>
                                    <Col md={9} lg={4} xl={3}>
                                        <CartSummary />
                                    </Col>
                                </Row>
                                <div className="my-3 text-center">
                                    <Button onClick={()=>navigate('/')}>Return Home</Button>
                                </div>
                            </>
                        )
                    }
            </Container>
            <Footer />
        </>
    )
}