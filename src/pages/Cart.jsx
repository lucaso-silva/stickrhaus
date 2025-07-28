import Header from '../components/Header.jsx'
import {Container, Row, Col, ListGroup} from "react-bootstrap";
import ItemCart from "../components/ItemCart.jsx";
import CartSummary from "../components/CartSummary.jsx";
import Footer from "../components/Footer.jsx"
import { useCart } from "../contexts/CartContext.jsx";
import EmptyCart from "../components/EmptyCart.jsx";

export default function Cart(){
    const cart = useCart();
    console.log("cart: ", cart);
    console.log(cart.length);

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
                <Row>
                    {cart.length===0 ? (
                        <EmptyCart />
                        ):(
                        <>
                            <Col>
                                <ListGroup>
                                    {cart.map((item) => <ItemCart key={item.id}
                                                                  sticker={item}
                                    />)}
                                </ListGroup>
                            </Col>
                            <Col>
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