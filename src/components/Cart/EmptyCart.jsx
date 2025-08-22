import empty_cart from '../../img/empty_cart.svg';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
    const navigate = useNavigate();

    return(
        <div className="text-center p-5">
            <h3>Your cart is empty</h3>
            <img src={empty_cart} alt="Empty cart image" className="pages_img" />
            <p>You haven't added anything to the cart yet.</p>
            <Button onClick={()=>navigate('/')}>Start Shopping</Button>
        </div>
    )
}