import NewArrivals from './NewArrivals.jsx';
import AllItems from './AllItems.jsx';
import Offers from './Offers.jsx';
import { Container, Col, Row } from 'react-bootstrap';

export default function Sections(){
    return (
        <Container fluid>
            <Row>
                <Col className="bg-primary-subtle"><NewArrivals /></Col>
                <Col md={6}><AllItems /></Col>
                <Col className="bg-warning-subtle"><Offers /></Col>
            </Row>
        </Container>
    )
}