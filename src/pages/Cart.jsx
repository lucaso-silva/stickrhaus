import Header from '../components/Header.jsx'
import {Container, Row, Col, Card, ListGroup} from "react-bootstrap";
import ItemCart from "../components/ItemCart.jsx";
import CartSummary from "../components/CartSummary.jsx";
import Footer from "../components/Footer.jsx"

export default function Cart(){
    const DATA=[
        {
            "id": 3,
            "description": "Retro Game Controller",
            "size": "2.5x2.5 inch",
            "category": "technology",
            "price": 4.25,
            "stock": 10,
            "discountPerCent": 0
        },
        {
            "id": 5,
            "description": "Stitch",
            "size": "3x3 inch",
            "category": "movies",
            "price": 4.99,
            "stock": 12,
            "discountPerCent": 15
        },
        {
            "id": 6,
            "description": "Mountains",
            "size": "3x2 inch",
            "category": "nature",
            "price": 3.75,
            "stock": 9,
            "discountPerCent": 0
        },
        {
            "id": 14,
            "description": "Dragon",
            "size": "3x3 inch",
            "category": "fantasy",
            "price": 5.25,
            "stock": 8,
            "discountPerCent": 0
        }
        ];

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
                            {DATA.map((item)=> <ItemCart sticker={item}/>)}
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