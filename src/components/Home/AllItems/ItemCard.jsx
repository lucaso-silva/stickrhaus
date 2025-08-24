import { Card } from 'react-bootstrap';
import { useCartDispatch } from "../../../contexts/CartContext.jsx";
import {useWishlistDispatch} from "../../../contexts/WishlistContext.jsx";

export default function ItemCard({sticker, card_width}) {
    const cartDispatch = useCartDispatch();
    const wishlistDispatch = useWishlistDispatch();

    return(
        <Card className={`${card_width}`} data-testid="sticker-card">
            <Card.Img variant="top" src="https://placehold.co/75x50" />
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
                        cartDispatch({
                            type:'add',
                            id:sticker._id,
                            description:sticker.description,
                            price:sticker.price,
                            discountPerCent: sticker.discountPerCent/100,
                        })
                    }}><span className="visually-hidden">Add to cart</span><i className="bi bi-bag-plus"></i>
                    </button>
                    <button className="cardBtn addFav" onClick={()=>{
                        wishlistDispatch({
                            type:'add',
                            favourite: sticker,
                        })
                    }}><span className="visually-hidden">Add to wishlist</span><i className="bi bi-heart"></i>
                    </button>
                </div>
            </Card.Body>
        </Card>
    )
}