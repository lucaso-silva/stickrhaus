import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import FormNewItem from '../components/FormNewItem';
import { Button, Container, Row, Col} from "react-bootstrap";
import { useState } from "react";
import ListToEdit from '../components/ListToEdit';

export default function AdminPanel(){
    const [addNewItem, setAddNewItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    return(
        <Container fluid>
            <Header />
            <Row>
                <Col>
                    <h2 className="text-center">Admin Panel</h2>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex flex-column gap-3" xs={2}>
                    <Button onClick={()=> {
                        setAddNewItem(true);
                        setEditItem(false);
                    }}>Add new Item</Button>
                    <Button onClick={()=>{
                        setAddNewItem(false);
                        setEditItem(true);
                    }}>Edit a item</Button>
                </Col>
                <Col>
                    { addNewItem ? (
                        <FormNewItem />
                    ) : ""
                    }
                    {editItem ? (
                        <ListToEdit/>
                    ) : ""
                    }
                    {!addNewItem&&!editItem ? (
                        <div className="blank-space"></div>
                    ):""}
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}