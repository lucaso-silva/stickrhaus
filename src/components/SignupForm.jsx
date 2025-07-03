import {Button, Form, Row, Col} from "react-bootstrap";

export default function SignupForm(){
    return(
        <Form>
            <Row>
                <Form.Group as={Col} controlId="fname">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group as={Col} controlId="lname">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" />
                </Form.Group>
            </Row>
            <Form.Group controlId="email" className="mt-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="password" className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text id="passwordHelper" muted>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or <emoji className=""></emoji></Form.Text>
            </Form.Group>
            <Form.Group controlId="password2" className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Repeat Password" />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">Sign up</Button>
        </Form>
    )
}