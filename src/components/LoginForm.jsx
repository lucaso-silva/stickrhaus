import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLoggedUserDispatch } from "../contexts/LoggedUserContext.jsx";
import * as formik from "formik";
import * as yup from "yup";

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useLoggedUserDispatch();
    const { Formik } = formik;
    const api = import.meta.env.VITE_API_URL;

    const schema = yup.object().shape({
        email: yup.string().required("Email is required"),
        password: yup.string().required("Password is required"),
    });

    const handleLogin = async (values) =>{
        const res = await fetch(`${api}/api/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: values.email, password: values.password })
        });
        const data = await res.json();
        if(res.ok){
            dispatch({
                type: 'login',
                loggedUser: data.user,
            });
            alert('logged in');
            navigate('/');
        }else{
            alert(data.error);
        }
    }

    return(
        <Formik
            validationSchema={schema}
            onSubmit={handleLogin}
            initialValues={{email:"", password:""}}
        >
            {({ handleSubmit, handleChange, values, touched, handleBlur, errors})=>(
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
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
                    <Form.Group controlId="password" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password"
                                      type="password"
                                      placeholder="Enter Password"
                                      value={values.password}
                                      onChange={handleChange}
                                      isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" variant="primary" className="mx-auto mt-3">Login</Button>
                </Form>
            )}
        </Formik>
    );
}


