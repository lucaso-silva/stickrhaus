import { Card, Form, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import {Formik} from "formik";

export default function FormNewItem() {
    const navigate = useNavigate();
    const { Formik } = formik;
    const api = import.meta.env.VITE_API_URL;

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

    const handleNewItem = async (values) => {
        const res = await fetch(`${api}/api/stickers`, {
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
            <Card className="mx-auto p-2 p-lg-4">
                <Card.Title className="text-center">Add New Sticker</Card.Title>
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
                                <div className="d-sm-flex gap-3 justify-content-sm-between my-2">
                                    <Form.Group className="col-sm-4" controlId="size">
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
                                    <Form.Group className="col-sm-7" controlId="category">
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
                                </div>
                                <div className="d-sm-flex gap-3 flex-wrap justify-content-sm-between justify-content-lg-start my-2">
                                    <Form.Group className="col-sm-5 col-lg-3" controlId="price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control name="price"
                                                      type="number"
                                                      value={values.price}
                                                      onChange={handleChange}
                                                      isInvalid={!!errors.price}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="col-sm-6 col-lg-3" controlId="stock">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control name="stock"
                                                      type="number"
                                                      value={values.stock}
                                                      onChange={handleChange}
                                                      isInvalid={!!errors.stock}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.stock}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="col-sm-5 col-lg-3" controlId="discount">
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
                                <Button type="submit" variant="primary" className="mt-4">Save</Button>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
    )
}