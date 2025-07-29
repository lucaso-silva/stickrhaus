import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import empty_list from '../img/empty_list.svg';

export default function EmptyCart() {
    const navigate = useNavigate();

    return(
        <div className="text-center p-5">
            <h3>Your wishlist is empty</h3>
            <img src={empty_list} alt="Empty cart image" className="pages_img" />
            <p>You haven't added anything to the cart yet.</p>
            <Button onClick={()=>navigate('/')}>Start Shopping</Button>
        </div>
    )
}