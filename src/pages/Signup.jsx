import Header from "../components/Header.jsx";
import SignupForm from "../components/SignupForm.jsx";
import Footer from "../components/Footer.jsx";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function Signup(){
    return(
        <>
            <Header />
            <Card style={{width:'40%'}} className="mx-auto my-5 p-5">
                <Card.Title className="text-center">Sign Up</Card.Title>
                <Card.Body>
                    <SignupForm/>
                    <hr/>
                    <Card.Text>Already registered? <Link to="/login">Log in</Link></Card.Text>
                </Card.Body>
            </Card>
            <Footer/>
        </>
    )
}