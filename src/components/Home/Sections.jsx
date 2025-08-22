import AllItems from './AllItems/AllItems.jsx';
import Offers from './Offers/Offers.jsx';
import { Container, Col, Row, Form, Pagination, Spinner } from 'react-bootstrap';
import {useEffect, useState} from "react";

export default function Sections(){
    const [ stickersDisplayed, setStickersDisplayed ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const [ offers, setOffers ] = useState([]);
    const [ currPage, setCurrPage ] = useState(1);
    const [ allItems, setAllItems] = useState([]);
    const [ searchValue, setSearchValue ] = useState("");
    const api = import.meta.env.VITE_API_URL;

    const numItemsToDisplay = 15;

    useEffect(()=>{
        fetchStickers();
    },[]);

    useEffect(()=>{
        const start = (currPage-1)*numItemsToDisplay;
        const end= start+numItemsToDisplay;
        setStickersDisplayed(allItems.slice(start,end));
    }, [currPage])

    const fetchStickers = ()=>{
        fetch(`${api}/api/stickers`)
            .then(res=> res.json())
            .then(data => {
                setAllItems(data);

                setStickersDisplayed(data.slice(0,numItemsToDisplay));

                let itemsInOffer = data.filter((item)=>item.discountPerCent > 0);
                setOffers(itemsInOffer);
                setLoading(false);
            });
    }

    const filterStickers = (e)=>{
            setSearchValue(e.target.value);
        if(e.target.value.length > 0){
            const filteredStickers = allItems.filter((item)=>{
                if(item.description.toLowerCase().includes(searchValue.toLowerCase()) || item.category.toLowerCase().includes(searchValue.toLowerCase())){
                    return item;
                }
            });
            setCurrPage(1);
            setAllItems(filteredStickers);
            setStickersDisplayed(filteredStickers.slice(0,numItemsToDisplay));
        } else {
            fetchStickers();
        }
    }

    const handleSort = (e) => {
        if(e.target.value === 'low'){
            const sorted = allItems.toSorted((a,b) => a.price - b.price);
            setCurrPage(1);
            setAllItems(sorted);
            setStickersDisplayed(sorted.slice(0,numItemsToDisplay));
        }else if(e.target.value === 'high'){
            const sorted = allItems.toSorted((a,b) => b.price - a.price);
            setCurrPage(1);
            setAllItems(sorted);
            setStickersDisplayed(sorted.slice(0,numItemsToDisplay));
        }else{
            setSearchValue("");
            fetchStickers();
        }
    }

    if(isLoading) return (
        <div className="text-center py-5">
            <Spinner animation="border" variant="primary"/>
            <p className="my-4">Loading stickers...</p>
        </div>);
    // if(stickers.length === 0) return <p>No stickers found.</p>;

    return (
        <Container fluid>
            <Row>
                <Col className="bg-primary-subtle p-4" xs={12} lg={2}>
                    <Form.Group>
                        <Form.Label htmlFor="search" className="fw-semibold">Sticker Finder</Form.Label>
                        <Form.Control name="filterSticker"
                                      id="search"
                                      type="text"
                                      placeholder="Type name or category"
                                      onChange={filterStickers}
                                      value={searchValue}
                        />
                    </Form.Group>
                    <h6 className="mt-4 mb-2">Sort</h6>
                    <Form.Select onChange={handleSort}>
                        <option>Price:</option>
                        <option value="low">Low to high</option>
                        <option value="high">High to low</option>
                    </Form.Select>
                </Col>
                <Col xs={12} sm={8}  lg={7}>
                    <AllItems stickers={stickersDisplayed}/>
                </Col>
                <Col className="bg-warning-subtle py-s1" xs={12} sm={4} lg={3}>
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
                            if(currPage < allItems.length/numItemsToDisplay){
                                setCurrPage(currPage+1);
                            }
                        }}/>
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}