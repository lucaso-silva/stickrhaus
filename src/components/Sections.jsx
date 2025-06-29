import NewArrivals from './NewArrivals.jsx';
import AllItems from './AllItems.jsx';
import Offers from './Offers.jsx';
import { Container, Col, Row } from 'react-bootstrap';
import {useEffect, useState} from "react";

export default function Sections({allItems, inOffer}){

    // if(isLoading) return <p>Loading stickers...</p>;
    // if(stickers.length === 0) return <p>No stickers found.</p>;

    // console.log(allItems);
    // console.log(inOffer);
    return (
        <Container fluid>
            <Row>
                <Col className="bg-primary-subtle" md={3}><NewArrivals /></Col>
                <Col md={6}><AllItems stickers={allItems}/></Col>
                <Col className="bg-warning-subtle" md={3}><Offers stickers={inOffer}/></Col>
            </Row>
        </Container>
    )
}