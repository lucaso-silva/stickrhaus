import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function ItemModal({ show, handleClose, sticker, updtList }){
    const [ description, setDescription ] = useState(sticker.description);
    const [ size, setSize ] = useState(sticker.size);
    const [ category, setCategory ] = useState(sticker.category)
    const [ price, setPrice ] = useState(sticker.price);
    const [ stock, setStock ] = useState(sticker.stock);
    const [ discountPerCent, setDiscountPerCent ] = useState(sticker.discountPerCent);
    const api = import.meta.env.VITE_API_URL;

    const handleUpdate = async (e) =>{
        e.preventDefault();
        const res = await fetch(`${api}/api/stickers/${sticker.id}`,{
            method: 'PATCH',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({ description, size, price: Number(price), category, stock: Number(stock), discountPerCent: Number(discountPerCent) })
        });
        const data = await res.json();
        console.log("updated: ", data);
        if(res.ok){
            // alert("item updated!");
            updtList();
            handleClose();
        }
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleUpdate}>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control required
                                      type="text"
                                      value={description}
                                      onChange={e=> setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <div className="d-sm-flex gap-2 justify-content-between my-2">
                        <Form.Group controlId="size">
                            <Form.Label>Size</Form.Label>
                            <Form.Control required
                                          type="text"
                                          value={size}
                                          onChange={e=> setSize(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="col-sm-6" controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control required
                                          type="text"
                                          value={category}
                                          onChange={e=> setCategory(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <div className="d-sm-flex gap-3 justify-content-between my-2">
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
                            <Form.Label>Discount</Form.Label>
                            <Form.Control required
                                          type="number"
                                          value={discountPerCent}
                                          onChange={e=> setDiscountPerCent(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <Button type="submit" variant="primary" className="mt-3">Save</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}