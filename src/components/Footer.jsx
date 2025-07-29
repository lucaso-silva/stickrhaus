import {Container, Row, Col, Stack} from "react-bootstrap";
import logo from '../img/logo.png'

export default function Footer(){
    return (
        <>
            <hr className="border border-warning border-2 opacity-75 my-1 mx-lg-4"/>
            <Container fluid>
                <Row>
                    <Col>
                        <Stack direction="horizontal" gap={5} className="p-3">
                            <div><img src={logo} alt="Logo Stickerhaus" width="150px" /></div>
                            <div className="ms-auto">
                                <h5>Legal</h5>
                                <ul className="links-footer">
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Follow us</h5>
                                <ul className="links-footer">
                                    <li><i className="bi bi-instagram"></i></li>
                                    <li><i className="bi bi-facebook"></i></li>
                                </ul>
                            </div>
                        </Stack>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>Developed by Lucas Oliveira</Col>
                    <Col>&copy; Stickrhaus</Col>
                </Row>
            </Container>


        </>
    )
}