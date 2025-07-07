import { Card } from 'react-bootstrap';
import { CartDispatchContext } from "../CartContext.jsx";
import { useContext } from "react";

export default function ItemCard({sticker}) {
    const dispatch = useContext(CartDispatchContext);

    return(
        <Card style={{ width:"10.75vw"}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title> {sticker.description}</Card.Title>
                <Card.Text>Size: {sticker.size}</Card.Text>
                {
                    sticker.discountPerCent>0 ?
                        <Card.Text>
                            Price: $<span className="text-decoration-line-through text-danger">{sticker.price}</span> {(sticker.price - sticker.price * sticker.discountPerCent/100).toFixed(2)}
                        </Card.Text> :
                        <Card.Text>Price: ${sticker.price}</Card.Text>
                }
                <div className="d-flex justify-content-between">
                        <button className="cardBtn addCart" onClick={()=>{
                            dispatch({
                                type:'add',
                                id:sticker.id,
                                description:sticker.description,
                                price:sticker.price,
                                qty: 1
                            })
                        }}><i className="bi bi-bag-plus"></i></button>
                        <button className="cardBtn addFav"><i className="bi bi-heart"></i></button>
                </div>
            </Card.Body>
        </Card>
    )
}