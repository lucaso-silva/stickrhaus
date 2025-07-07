import {Card, Container, Row, Col, Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../CartContext.jsx";

export default function CartSummary(){
    let navigate = useNavigate();
    const cart = useContext(CartContext);
    const subtotal = cart.reduce((acc,item)=>{
        return acc+item.price;
    },0);
    const deliveryFee = 5.99;

    let goCheckout = () => navigate("/checkoutaddress");
    return (
        <Card>
            <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                {/*<Card.Text>*/}
                    <Container>
                        <Row>
                            <Col>Subtotal</Col>
                            <Col>$ {subtotal}</Col>
                        </Row>
                        <Row>
                            <Col>Discount</Col>
                            <Col>-$</Col>
                        </Row>
                        <Row>
                            <Col>Delivery Fee</Col>
                            <Col>$ {deliveryFee}</Col>
                        </Row>
                    </Container>
                {/*</Card.Text>*/}
                <hr />
                {/*<Card.Text>*/}
                    <Container>
                        <Row>
                            <Col>Total</Col>
                            <Col>$ {subtotal + deliveryFee}</Col>
                        </Row>
                    </Container>
                {/*</Card.Text>*/}
                <Button className="mt-3" onClick={goCheckout}>Go to Checkout <i className="bi bi-arrow-right ms-2"></i></Button>
            </Card.Body>
        </Card>
    )
}