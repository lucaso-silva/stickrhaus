import Header from '../components/Header.jsx'
import {Container, Row, Col, ListGroup} from "react-bootstrap";
import ItemCart from "../components/ItemCart.jsx";
import CartSummary from "../components/CartSummary.jsx";
import Footer from "../components/Footer.jsx"
import {useContext} from "react";
import { CartContext } from "../CartContext.jsx";

export default function Cart(){
    const cart = useContext(CartContext);
    console.log(cart);

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <h1>Your Cart</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {cart.map((item)=> <ItemCart sticker={item}/>)}
                        </ListGroup>
                    </Col>
                    <Col>
                        <CartSummary />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}