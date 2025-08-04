import {Container, Row, Col, Stack} from "react-bootstrap";
import logo from '../img/logo.png'

export default function Footer(){
    return (
        <>
            <hr className="border border-warning border-2 opacity-75 my-1 mx-lg-4"/>
            <Container fluid>
                <Row>
                    <Col>
                        <Stack gap={4} className="p-3 flex-column flex-sm-row justify-content-center align-items-center">
                            <div>
                                <img src={logo} alt="Logo Stickerhaus" width="150px" />
                            </div>
                            <div className="ms-sm-auto text-center my-2">
                                <h5>Legal</h5>
                                <ul className="links-footer">
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Follow us</h5>
                                <ul className="links-footer text-center">
                                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                </ul>
                            </div>
                        </Stack>
                    </Col>
                </Row>
                <hr/>
                <Row className="pb-2 px-3">
                    <Col className="text-center">Developed by Lucas Oliveira</Col>
                    <Col>&copy; Stickrhaus</Col>
                </Row>
            </Container>
        </>
    )
}