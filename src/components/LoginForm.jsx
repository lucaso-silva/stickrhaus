import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedUserDispatch } from "./contexts/LoggedUserContext.jsx";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useLoggedUserDispatch();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        console.log("login data: ", data);
        if(res.ok){
            dispatch({
                type: 'login',
                loggedUser: data.user,
            })
            // onAuth(data.user);
            // setMessage('Login successful!');
            alert('logged in');
            navigate('/');
        }else{
            alert(data.error);
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control required
                              type="email"
                              placeholder="Enter email"
                              value={email}
                              onChange={e=>setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control required
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={e=>setPassword(e.target.value)}
                />
            </Form.Group>
            <Button type="submit" variant="primary" className="mx-auto mt-3">Login</Button>
        </Form>
    )
}


