import {ListGroup, Stack} from "react-bootstrap";
import {useCartDispatch} from "../../contexts/CartContext.jsx";
import {useWishlistDispatch} from "../../contexts/WishlistContext.jsx";

export default function FavList({ sticker }){
    const cartDispatch = useCartDispatch();
    const wishlistDispatch = useWishlistDispatch();

    return (
        <ListGroup.Item>
            <Stack direction="horizontal" gap={3}>
                <div>
                    <img src="https://placehold.co/75x75" alt="item"/>
                </div>
                <div>
                    <h5>{sticker.description}</h5>
                    {sticker.discountPerCent > 0 ? (
                        <p>Price: $<span
                            className="text-decoration-line-through text-danger">{sticker.price}</span> {(sticker.price - sticker.price * sticker.discountPerCent).toFixed(2)}
                        </p>
                    ) : (
                        <p>Price: ${sticker.price}</p>
                    )}
                </div>
                <div className="p-1 ms-auto">
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <button className="cardBtn" onClick={()=>{
                            wishlistDispatch({
                                type: 'remove',
                                favourite: sticker,
                            })
                        }}><span className="visually-hidden">Remove from wishlist</span><i
                            className="bi bi-trash3 clickable toDel"></i>
                        </button>
                        <button className="cardBtn addCart" onClick={() => {
                            cartDispatch({
                                type: 'add',
                                id: sticker._id,
                                description: sticker.description,
                                price: sticker.price,
                                discountPerCent: sticker.discountPerCent / 100,
                            })
                        }}><span className="visually-hidden">Add to cart</span><i className="bi bi-bag-plus"></i>
                        </button>
                    </div>
                </div>
            </Stack>
        </ListGroup.Item>
    )
}