import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import PaymentInfo from "../components/PaymentInfo.jsx";
import {Breadcrumb, Container} from "react-bootstrap";

export default function CheckoutPayment() {
    return(
        <Container fluid>
            <Header />
            <h4 className="text-center">Checkout</h4>
            <Breadcrumb className="text-center">
                <Breadcrumb.Item href="/checkoutaddress">Shipping info</Breadcrumb.Item>
                <Breadcrumb.Item href="/checkoutpayment" linkProps={{content: "var(--bs-breadcrumb-divider, '\-')"}}>Payment info</Breadcrumb.Item>
                <Breadcrumb.Item href="/checkoutsummary">Confirm order</Breadcrumb.Item>
            </Breadcrumb>
            <PaymentInfo />
            <Footer />
        </Container>
    )
}