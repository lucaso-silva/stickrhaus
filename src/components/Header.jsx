import logo from '../img/logo.png';
import {Button, Container, Col, Row} from 'react-bootstrap';

export default function Header(){
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1><img src={logo} width="300px" alt="StickrHaus logo"/></h1>
                </Col>
                <Col>
                    <Button variant="warning">Login</Button>
                    <i className="bi bi-cart2 fs-3 ms-3"></i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr className="border border-primary border-2 opacity-75"/>
                </Col>
            </Row>
        </Container>
    )
}