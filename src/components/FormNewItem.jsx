import { Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

export default function FormNewItem() {
    const [ description, setDescription ] = useState('');
    const [ size, setSize ] = useState('');
    const [ price, setPrice ] = useState(0.00);
    const [ category, setCategory ] = useState('');
    const [ stock, setStock ] = useState(0);
    const [ discountPerCent, setDiscountPerCent ] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/api/stickers', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ description, size, price: Number(price), category, stock: Number(stock), discountPerCent: Number(discountPerCent) })
        })
        const data = await res.json();
        if(res.ok){
            alert("new item created ", data.description);
            setDescription("");
            setSize("");
            setPrice(0.00);
            setCategory("");
            setStock(0);
            setDiscountPerCent(0);
            navigate('/');
        }else{
            alert(data.error);
        }

    }

    return(

            <Card style={{width:'60%'}} className="mx-auto">
                <Card.Title>Add New Sticker</Card.Title>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control required
                                          type="text"
                                          placeholder="Enter item description"
                                          value={description}
                                          onChange={e=> setDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="size">
                            <Form.Label>Size</Form.Label>
                            <Form.Control required
                                          type="text"
                                          placeholder="Enter size per inch"
                                          value={size}
                                          onChange={e=> setSize(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control required
                                          type="text"
                                          placeholder="Enter category"
                                          value={category}
                                          onChange={e=> setCategory(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control required
                                          type="number"
                                          value={price}
                                          onChange={e=> setPrice(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="stock">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control required
                                          type="number"
                                          value={stock}
                                          onChange={e=> setStock(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="discount">
                            <Form.Label>Discount per cent</Form.Label>
                            <Form.Control required
                                          type="number"
                                          value={discountPerCent}
                                          onChange={e=> setDiscountPerCent(e.target.value)}
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary" className="mt-4">Save</Button>
                    </Form>
                </Card.Body>
            </Card>
    )
}