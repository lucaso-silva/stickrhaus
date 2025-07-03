import Header from "../components/Header.jsx";
import LoginForm from "../components/LoginForm.jsx";
import Footer from "../components/Footer.jsx";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function Login(){
    return(
        <>
            <Header />
            <Card style={{width:'40%'}} className="mx-auto my-5 p-5">
                <Card.Title className="text-center">Login</Card.Title>
                <Card.Body>
                    <LoginForm/>
                    <hr/>
                    <Card.Text>Not registered yet? <Link to="/signup">Sign up</Link></Card.Text>
                </Card.Body>
            </Card>
            <Footer />
        </>
    )
}