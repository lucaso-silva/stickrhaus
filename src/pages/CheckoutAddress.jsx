import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import AddressInfo from '../components/AddressInfo.jsx';
import {Breadcrumb, Container} from 'react-bootstrap';

export default function CheckoutAddress() {
    return(
        <Container fluid>
            <Header />
            <h4 className="text-center">Checkout</h4>
            <Breadcrumb>
                <Breadcrumb.Item href="/checkoutaddress">Shipping info</Breadcrumb.Item>
                <Breadcrumb.Item href="/checkoutpayment">Payment info</Breadcrumb.Item>
                <Breadcrumb.Item href="/checkoutsummary">Confirm order</Breadcrumb.Item>
            </Breadcrumb>
            <AddressInfo />
            <Footer />
        </Container>
    )
}