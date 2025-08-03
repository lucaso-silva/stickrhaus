import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import FormNewItem from '../components/FormNewItem';
import { Button, Container, Row, Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import ListToEdit from '../components/ListToEdit';
import admin_settings from '../img/admin_settings.svg'
import {Link, useNavigate} from "react-router-dom";

export default function AdminPanel(){
    const [addNewItem, setAddNewItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    const navigate = useNavigate();
    const api = import.meta.env.VITE_API_URL;

    useEffect(()=>{
        fetch(`${api}/api/auth/admin`,{
            credentials: 'include',
        })
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if(!data || data.role !== 'admin'){
                    navigate('/');
                }
            })
    },[])

    const link = <Link to='/' className="navLink">Home</Link>

    return(
        <Container fluid>
            <Header link={link}/>
            <Row>
                <Col>
                    <h2 className="text-center mt-2 mb-4">Admin Panel</h2>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex flex-column flex-sm-row flex-lg-column justify-content-center justify-content-lg-start gap-3 p-4" xs={12} lg={3}>
                    <Button onClick={()=> {
                        setAddNewItem(true);
                        setEditItem(false);
                    }}>Add new Item</Button>
                    <Button onClick={()=>{
                        setAddNewItem(false);
                        setEditItem(true);
                    }}>Edit a item</Button>
                </Col>
                <Col className="p-4">
                    { addNewItem ? (
                        <div className="col-sm-10 col-md-9 mx-auto">
                            <FormNewItem />
                        </div>
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