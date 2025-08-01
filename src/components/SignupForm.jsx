import {Button, Form, Row, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";

export default function SignupForm(){
    const navigate = useNavigate();
    const { Formik } = formik;
    const api = import.meta.env.VITE_API_URL;

    const schema = yup.object().shape({
        fName: yup.string()
            .required("First name required")
            .min(2, "Too short!")
            .max(20, "Too long!"),
        lName: yup.string()
            .required("Last name required")
            .min(2, "Too short!")
            .max(30, "Too long!"),
        email: yup.string().email('Invalid email address').required('Email address required'),
        password: yup.string()
            .required("Password required")
            .trim()
            .min(8, "Password must be at least 8 characters long")
            .max(20, "Too long!")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, it can contain special characters'),
        password2: yup.string()
            .required("Is necessary to confirm the password")
            .oneOf([yup.ref('password')], 'Password must match'),
    });

    const handleSingIn = async (values) => {
        console.log("values: ", values);
            const res = await fetch(`${api}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    firstName: values.fName,
                    lastName: values.lName,
                    email: values.email,
                    password: values.password,
                    role:"user" }
                ),
            });
            const data = await res.json();
            console.log(data);
            if(res.ok){
                navigate('/login');
            }else{
                alert(data.error);
            }
    }

    return(
        <Formik
            validationSchema={schema}
            onSubmit={handleSingIn}
            initialValues={{fName:"",lName:"",email:"",password:"", role:"user"}}
        >
            {({ handleSubmit, handleChange, values, touched, handleBlur, errors})=>(
                <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} controlId="fname">
                            <Form.Label>First name</Form.Label>
                            <Form.Control name="fName"
                                          type="text"
                                          placeholder="Enter your first name"
                                          value={values.fName}
                                          onChange={handleChange}
                                          isInvalid={!!errors.fName}
                            />
                            <Form.Control.Feedback type="invalid">{errors.fName}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="lname">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control name="lName"
                                          type="text"
                                          placeholder="Enter your last name"
                                          value={values.lName}
                                          onChange={handleChange}
                                          isInvalid={!!errors.lName}
                            />
                            <Form.Control.Feedback type="invalid">{errors.lName}</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group controlId="email" className="mt-2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email"
                                      type="email"
                                      placeholder="Enter email"
                                      value={values.email}
                                      onChange={handleChange}
                                      isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="password" className="mt-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name = "password"
                                      type="password"
                                      placeholder="Password"
                                      value={values.password}
                                      onChange={handleChange}
                                      isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="password2" className="mt-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password2"
                                      type="password"
                                      placeholder="Repeat Password"
                                      value={values.password2}
                                      onChange={handleChange}
                                      isInvalid={!!errors.password2}
                        />
                        <Form.Control.Feedback type="invalid">{errors.password2}</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" variant="primary" className="mt-3">Sign up</Button>
                </Form>
            )}
        </Formik>
    );
}