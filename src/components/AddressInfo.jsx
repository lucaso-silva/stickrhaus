import { Button, Card, Form, Row, Col } from 'react-bootstrap'

export default function AddressInfo(){
    return(
        <Card style={{width:'60%'}} className="py-3 px-4 mx-auto">
            <Card.Title>Shipping Address</Card.Title>
            <Form>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" placeholder="(xxx) xxx-xxxx" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter destination address" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Building number</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city name" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State/Province" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Row>
                <Button type="submit" variant="primary" className="mt-3">Continue</Button>
            </Form>
        </Card>
    )
}