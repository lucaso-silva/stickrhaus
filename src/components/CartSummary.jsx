import {Card, Container, Row, Col, Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function CartSummary(){
    let navigate = useNavigate();

    let goCheckout = () => navigate("/checkoutaddress");
    return (
        <Card>
            <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                {/*<Card.Text>*/}
                    <Container>
                        <Row>
                            <Col>Subtotal</Col>
                            <Col>$ </Col>
                        </Row>
                        <Row>
                            <Col>Discount</Col>
                            <Col>-$</Col>
                        </Row>
                        <Row>
                            <Col>Delivery Fee</Col>
                            <Col>$ 9.99</Col>
                        </Row>
                    </Container>
                {/*</Card.Text>*/}
                <hr />
                {/*<Card.Text>*/}
                    <Container>
                        <Row>
                            <Col>Total</Col>
                            <Col>$</Col>
                        </Row>
                    </Container>
                {/*</Card.Text>*/}
                <Button className="mt-3" onClick={goCheckout}>Go to Checkout <i className="bi bi-arrow-right ms-2"></i></Button>
            </Card.Body>
        </Card>
    )
}