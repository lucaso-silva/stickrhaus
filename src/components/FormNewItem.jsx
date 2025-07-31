import { Card, Form, Button } from 'react-bootstrap';
// import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import {Formik} from "formik";

export default function FormNewItem() {
    // const [ description, setDescription ] = useState('');
    // const [ size, setSize ] = useState('');
    // const [ price, setPrice ] = useState(0.00);
    // const [ category, setCategory ] = useState('');
    // const [ stock, setStock ] = useState(0);
    // const [ discountPerCent, setDiscountPerCent ] = useState(0);
    const navigate = useNavigate();
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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const res = await fetch('http://localhost:4000/api/stickers', {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: JSON.stringify({ description, size, price: Number(price), category, stock: Number(stock), discountPerCent: Number(discountPerCent) })
    //     })
    //     const data = await res.json();
    //     if(res.ok){
    //         alert("new item created ", data.description);
    //         setDescription("");
    //         setSize("");
    //         setPrice(0.00);
    //         setCategory("");
    //         setStock(0);
    //         setDiscountPerCent(0);
    //         navigate('/');
    //     }else{
    //         alert(data.error);
    //     }
    // }

    const handleNewItem = async (values) => {
        // e.preventDefault();
        const res = await fetch('http://localhost:4000/api/stickers', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ description: values.description, size: values.size, price: values.price, category: values.category, stock: values.stock, discountPerCent: values.discount })
        })
        const data = await res.json();
        if(res.ok){
            alert("new item created ", values.description);
            navigate('/');
        }else{
            alert(data.error);
        }
    }

    return(
            <Card style={{width:'60%'}} className="mx-auto">
                <Card.Title>Add New Sticker</Card.Title>
                <Card.Body>
                    <Formik validationSchema={schema}
                            onSubmit={handleNewItem}
                            initialValues={{description:"", size:"", price:0.01, category:"", stock:1, discount:0}}
                    >
                        {({handleSubmit, handleChange, values, touched, handleBlur, errors})=>(
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control name="description"
                                                  type="text"
                                                  placeholder="Enter item description"
                                                  value={values.description}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.description}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="size">
                                    <Form.Label>Size</Form.Label>
                                    <Form.Control name="size"
                                                  type="text"
                                                  placeholder="Enter size per inch"
                                                  value={values.size}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.size}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.size}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="category">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control name="category"
                                                  type="text"
                                                  placeholder="Enter category"
                                                  value={values.category}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.category}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
                                </Form.Group>
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
                                    <Form.Label>Discount per cent</Form.Label>
                                    <Form.Control name="discount"
                                                  type="number"
                                                  value={values.discount}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.discount}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.discount}</Form.Control.Feedback>
                                </Form.Group>
                                <Button type="submit" variant="primary" className="mt-4">Save</Button>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
    )
}