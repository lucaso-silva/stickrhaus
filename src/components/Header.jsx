import logo from '../img/logo.png';
import {Stack} from 'react-bootstrap';
import Navbar from "./Navbar.jsx";
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <>
            <Stack direction="horizontal" gap={1}>
                <div className="ms-4"><Link to="/"><h1><img src={logo} width="230px" alt="StickrHaus logo"/></h1></Link></div>
                <Navbar />
            </Stack>
            <hr className="border border-primary border-2 opacity-75 my-1 mx-lg-4"/>
        </>
    )
}