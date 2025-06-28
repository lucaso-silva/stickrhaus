import {Container, Row, Col} from "react-bootstrap";

export default function Footer(){
    return (
        <>
            <hr className="border border-warning border-2 opacity-75 my-1 mx-lg-4"/>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="footer text-center">
                            <h2 className="mt-5">Footer</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}