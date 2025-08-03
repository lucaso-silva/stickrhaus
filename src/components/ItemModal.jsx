import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import * as formik from 'formik';
import * as yup from 'yup';

export default function ItemModal({ show, handleClose, sticker, updtList }){
    // const [ description, setDescription ] = useState(sticker.description);
    // const [ size, setSize ] = useState(sticker.size);
    // const [ category, setCategory ] = useState(sticker.category)
    // const [ price, setPrice ] = useState(sticker.price);
    // const [ stock, setStock ] = useState(sticker.stock);
    // const [ discountPerCent, setDiscountPerCent ] = useState(sticker.discountPerCent);
    const api = import.meta.env.VITE_API_URL;
    const { Formik } = formik;

    const schema = yup.object().shape({
        description: yup.string()
            .required("Description is required")
            .min(2, "Too short!")
            .max(30, "Too long!"),
        size: yup.string().required("Size is required")
            .min(2, "Too short!")
            .max(15, "Too long!"),
        price: yup.number().required("Price is required").positive("Enter a positive value"),
        category: yup.string().required("Category is required")
            .min(3, "Too short!")
            .max(15, "Too long!"),
        stock: yup.number().required("Stock is required").min(1, "Stock needs to be greater than 0"),
        discount: yup.number().min(0,"Minimum value is 0")
    })

    const handleUpdate = async (values) =>{
        const res = await fetch(`${api}/api/stickers/${sticker.id}`,{
            method: 'PATCH',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({ description: values.description, size:values.size, price: values.price, category: values.category, stock: values.stock, discountPerCent: values.discount })
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
        <Modal show={show} fullscreen="sm-down" onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik validationSchema={schema}
                        onSubmit={handleUpdate}
                        initialValues={{description:sticker.description, size:sticker.size, price:sticker.price, category:sticker.category, stock:sticker.stock, discount:sticker.discountPerCent}}
                >
                    {({ handleSubmit, handleChange, values, touched, handleBlur, errors})=>(
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description"
                                              type="text"
                                              value={values.description}
                                              onChange={handleChange}
                                              isInvalid={!!errors.description}
                                />
                                <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                            </Form.Group>
                            <div className="d-sm-flex gap-2 justify-content-between my-2">
                                <Form.Group controlId="size">
                                    <Form.Label>Size</Form.Label>
                                    <Form.Control name="size"
                                                  type="text"
                                                  value={values.size}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.size}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.size}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="col-sm-6" controlId="category">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control name="category"
                                                  type="text"
                                                  value={values.category}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.category}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className="d-sm-flex gap-3 justify-content-between my-2">
                                <Form.Group controlId="price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control name="price"
                                                  type="number"
                                                  value={values.price}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.price}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="stock">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control name="stock"
                                                  type="number"
                                                  value={values.stock}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.stock}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.stock}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="discount">
                                    <Form.Label>Discount</Form.Label>
                                    <Form.Control name="discount"
                                                  type="number"
                                                  value={values.discount}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.discount}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.discount}</Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <Button type="submit" variant="primary" className="mt-3">Save</Button>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}