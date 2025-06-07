import logo from '../img/logo.png';
import {Button, Container, Col, Row, Stack} from 'react-bootstrap';

export default function Header() {
    return (
        <Stack direction="horizontal" gap={1}>
            <div className="ms-4"><h1><img src={logo} width="230px" alt="StickrHaus logo"/></h1></div>
            <div className="ms-auto"><Button variant="warning">Login</Button></div>
            <div className="me-5"><i className="bi bi-cart2 fs-3 ms-3"></i></div>
        </Stack>
    )
}