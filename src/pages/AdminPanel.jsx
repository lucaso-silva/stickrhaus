import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import FormNewItem from '../components/FormNewItem';
import { Button, Container, Row, Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import ListToEdit from '../components/ListToEdit';
import admin_settings from '../img/admin_settings.svg'
import {useNavigate} from "react-router-dom";

export default function AdminPanel(){
    const [addNewItem, setAddNewItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    // const [ admin, setAdmin] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:4000/api/auth/admin',{
            credentials: 'include',
        })
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                console.log("front data: ",data);
                if(!data || data.role !== 'admin'){
                    navigate('/');
                }
                console.log("Admin panel");
            })
    },[ ])

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
                        <div className="text-center">
                            <img src={admin_settings} alt="Admin Settings" className="pages_img" />
                        </div>
                    ):""}
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}