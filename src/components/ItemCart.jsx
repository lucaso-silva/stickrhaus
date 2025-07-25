import {ListGroup, Stack} from 'react-bootstrap';
import { useState } from "react";
import {useCartDispatch} from "../contexts/CartContext.jsx";

export default function ItemCart({sticker}) {
    const dispatch = useCartDispatch();
    const [ stickerQty, setStickerQty ] = useState(sticker.qty);

    return(
        <>
            <ListGroup.Item className="d-flex justify-content-between">
                <Stack direction="horizontal" gap={5}>
                    <div><img src="https://placehold.co/75x75" alt="item"/></div>
                    <div>
                        <h4>{sticker.description}</h4>
                        <p>{sticker.size}</p>
                        <p>Price: {sticker.price}</p>
                    </div>
                    {/*<div className="align-self-stretch">*/}
                        <div className="d-flex flex-column justify-content-between align-self-stretch align-items-center">
                            <i className="bi bi-trash3 clickable toDel" onClick={()=>{
                                dispatch({
                                    type:'remove',
                                    id:sticker.id,
                                    qty:sticker.qty,
                                })
                            }}></i>
                            <div className="px-2 rounded-2 border">
                                <span className="clickable" onClick={()=>{
                                   if(sticker.qty>1) {
                                       setStickerQty(stickerQty-1);
                                       dispatch({
                                           type:'decrease',
                                           id:sticker.id,
                                       })
                                   } else {
                                       // dispatch({
                                       //     type: 'remove',
                                       //     id: sticker.id,
                                       // })
                                       alert('Minimum amount 1, or click remove');
                                   }
                                }}>-</span>
                                <span className="mx-3">{stickerQty}</span>
                                <span className="clickable" onClick={()=>{
                                    setStickerQty(stickerQty+1);
                                    dispatch({
                                        type:'add',
                                        id:sticker.id,
                                        description:sticker.description,
                                        price:sticker.price,
                                    })
                                }}>+</span>
                            </div>
                        </div>
                    {/*</div>*/}
                </Stack>
            </ListGroup.Item>
        </>
    )
}