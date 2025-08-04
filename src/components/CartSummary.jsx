import {Card, Container, Row, Col, Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useCart } from "../contexts/CartContext.jsx";
import {useEffect, useState} from "react";

export default function CartSummary(){
    let navigate = useNavigate();
    const cart = useCart();
    const [ subtotal, setSubtotal ] = useState(0)
    const [ totalDiscount, setTotalDiscount ] = useState(0);

    useEffect(() => {
        setSubtotal(cart.reduce((acc,item)=>{
            return acc+item.price*item.qty;
        },0))

        setTotalDiscount(cart.reduce((acc,item)=>{
            return acc+(item.price*item.discountPerCent)*item.qty;
        },0))
    }, [cart])

    const deliveryFee = 5.99;

    return (
        <Card>
            <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                {/*<Card.Text>*/}
                    <Container>
                        <Row>
                            <Col>Subtotal</Col>
                            <Col>$ {subtotal.toFixed(2)}</Col>
                        </Row>
                        <Row className="text-danger">
                            <Col>Discount</Col>
                            <Col>-$ {totalDiscount.toFixed(2)}</Col>
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
                            <Col>$ {(subtotal + deliveryFee - totalDiscount).toFixed(2)}</Col>
                        </Row>
                    </Container>
                {/*</Card.Text>*/}
                <Button className="mt-5" onClick={()=>navigate('/create-checkout-session')}>Go to Checkout <i className="bi bi-arrow-right ms-2"></i></Button>
            </Card.Body>
        </Card>
    )
}