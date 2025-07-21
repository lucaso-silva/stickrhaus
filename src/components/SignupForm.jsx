import {Button, Form, Row, Col} from "react-bootstrap";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SignupForm(){
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await fetch('http://localhost:4000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email, password, role:"user" }),
        });
        const data = await res.json();
        console.log(data);
        if(res.ok){
            // onAuth(data.token);
            // setMessage('signup successfully');
            navigate('/login');
        }else{
            alert(data.error);
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} controlId="fname">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="Enter your first name"
                                  value={firstName}
                                  onChange={e=>setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="lname">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required
                                  type="text"
                                  placeholder="Enter your last name"
                                  value={lastName}
                                  onChange={e=>setLastName(e.target.value)}
                    />
                </Form.Group>
            </Row>
            <Form.Group controlId="email" className="mt-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control required
                              type="email"
                              placeholder="Enter email"
                              value={email}
                              onChange={e=>setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="password" className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control required
                              type="password"
                              placeholder="Password"
                />
                <Form.Text id="passwordHelper" muted>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji</Form.Text>
            </Form.Group>
            <Form.Group controlId="password2" className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control required
                              type="password"
                              placeholder="Repeat Password"
                              value={password}
                              onChange={e=>setPassword(e.target.value)}
                />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">Sign up</Button>
        </Form>
    )
}