import { Card, Form, Button } from "react-bootstrap";

export default function LoginForm() {
    return(
        <Form>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit" variant="primary" className="mx-auto mt-3">Login</Button>
        </Form>
    )
}


