import Header from '../components/Header.jsx'
import {Container, Row, Col, ListGroup} from "react-bootstrap";
import ItemCart from "../components/ItemCart.jsx";
import CartSummary from "../components/CartSummary.jsx";
import Footer from "../components/Footer.jsx"
import { useCart } from "../contexts/CartContext.jsx";
import EmptyCart from "../components/EmptyCart.jsx";

export default function Cart(){
    const cart = useCart();

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
                <Row className="my-2 justify-content-center">
                    {cart.length===0 ? (
                        <EmptyCart />
                        ):(
                        <>
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
                        </>
                        )
                    }
                </Row>
            </Container>
            <Footer />
        </>
    )
}