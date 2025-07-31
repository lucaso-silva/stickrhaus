import AllItems from './AllItems.jsx';
import Offers from './Offers.jsx';
import { Container, Col, Row, Form, Pagination } from 'react-bootstrap';
import {useEffect, useState} from "react";

export default function Sections(){
    const [ stickers, setStickers ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const [ offers, setOffers ] = useState([]);
    const [ currPage, setCurrPage ] = useState(1);
    const [ allItems, setAllItems] = useState([]);
    const api = import.meta.env.VITE_API_URL;

    useEffect(()=>{
        fetchStickers();

    },[currPage]);

    const fetchStickers = ()=>{
        fetch(`${api}/api/stickers?page=${currPage}&limit=12`)
            .then(res=> res.json())
            .then(data => {
                setStickers(data.dataPag);

                let itemsInOffer = data.data.filter((item)=>item.discountPerCent > 0);

                setOffers(itemsInOffer);
                setAllItems(data.data);
                setLoading(false);
            });
    }

    const filterStickers = (e)=>{
        if(e.target.value.length > 0){
            const filteredStickers = allItems.filter((item)=>{
                if(item.description.toLowerCase().includes(e.target.value.toLowerCase()) || item.category.toLowerCase().includes(e.target.value.toLowerCase())){
                    return item;
                }
            })
            setStickers(filteredStickers);
        } else {
            fetchStickers();
        }
    }

    const handleSort = (e) => {
        if(e.target.value === 'low'){
            const sorted = allItems.toSorted((a,b) => a.price - b.price);
            setStickers(sorted)
        }else if(e.target.value === 'high'){
            const sorted = stickers.toSorted((a,b) => b.price - a.price);
            setStickers(sorted)
        }else{
            fetchStickers();
        }
    }

    if(isLoading) return <p>Loading stickers...</p>;
    // if(stickers.length === 0) return <p>No stickers found.</p>;

    return (
        <Container fluid>
            <Row>
                <Col className="bg-primary-subtle p-4" md={3}>
                    <h4 className="mt-2">Sticker finder</h4>
                    <Form.Control type="text" placeholder="Type name or category" onChange={filterStickers}/>
                    <h5 className="mt-4 mb-2">Sort</h5>
                    <Form.Select onChange={handleSort}>
                        <option>Price:</option>
                        <option value="low">Low to high</option>
                        <option value="high">High to low</option>
                    </Form.Select>
                </Col>
                <Col md={6}>
                    <AllItems stickers={stickers}/>
                </Col>
                <Col className="bg-warning-subtle py-1" md={3}>
                    <Offers stickers={offers.slice(6)}/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col></Col>
                <Col>
                    <Pagination>
                        <Pagination.Prev onClick={()=>{
                            currPage>1 ? setCurrPage(currPage-1) : setCurrPage(1);
                        }}/>
                        <Pagination.Item>{currPage}</Pagination.Item>
                        <Pagination.Next onClick={()=>{
                            if(currPage < allItems.length/12){
                                setCurrPage(currPage+1);
                            }
                        }}/>
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}