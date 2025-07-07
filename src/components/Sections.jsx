import NewArrivals from './NewArrivals.jsx';
import AllItems from './AllItems.jsx';
import Offers from './Offers.jsx';
import { Container, Col, Row } from 'react-bootstrap';
import {useEffect, useState} from "react";

export default function Sections(){
    const [ stickers, setStickers ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const [ offers, setOffers ] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:4000/api/stickers`)
            .then(res=> res.json())
            .then(data => {
                setStickers(data);

                let itemsInOffer = data.filter((item)=>item.discountPerCent > 0);

                setOffers(itemsInOffer);
                setLoading(false);
            });
    },[]);

    if(isLoading) return <p>Loading stickers...</p>;
    if(stickers.length === 0) return <p>No stickers found.</p>;

    return (
        <Container fluid>
            <Row>
                <Col className="bg-primary-subtle" md={3}><NewArrivals /></Col>
                <Col md={6}><AllItems stickers={stickers}/></Col>
                <Col className="bg-warning-subtle" md={3}><Offers stickers={offers}/></Col>
            </Row>
        </Container>
    )
}