import {ListGroup, Form, Stack} from 'react-bootstrap';
import {useContext} from "react";
import {CartDispatchContext} from "../CartContext.jsx";

export default function ItemCart({sticker}) {
    const dispatch = useContext(CartDispatchContext);

    return(
        <>
            <ListGroup.Item className="d-flex justify-content-between">
                <Stack direction="horizontal" gap={5}>
                    <div><img src="#" alt="item"/></div>
                    <div>
                        <h4>{sticker.description}</h4>
                        <p>{sticker.size}</p>
                        <p>Price: {sticker.price}</p>
                    </div>
                    {/*<div className="align-self-stretch">*/}
                        <div className="d-flex flex-column justify-content-between align-self-stretch align-items-center">
                            <i className="bi bi-trash3" onClick={()=>{
                                dispatch({
                                    type:'remove',
                                    id:sticker.id,
                                })
                            }}></i>
                            {/*<Form.Control type="number" size="sm" defaultValue={sticker.stock}/>*/}
                            <div className="px-2 rounded-2 border">
                                <span onClick={()=>{
                                    dispatch({
                                        type:'remove',
                                        id:sticker.id,
                                    })
                                }}>-</span>
                                <span className="mx-3">{1}</span>
                                <span onClick={()=>{
                                    dispatch({
                                        type:'add',
                                        id:sticker.id,
                                        description:sticker.description,
                                        price:sticker.price,
                                        qty: 1
                                    })
                                }}>+</span>
                            </div>
                        </div>
                    {/*</div>*/}
                </Stack>
            </ListGroup.Item>
        </>
        // <Card>
        //     <Card.Img variant="left" src="holder.js/100px180"/>
        //     <Card.Body>
        //         <Card.Title>{sticker.description}</Card.Title>
        //         <Card.Text>
        //             Size:{sticker.size}
        //         </Card.Text>
        //         <Card.Text>
        //             ${sticker.price}
        //         </Card.Text>
        //     </Card.Body>
        // </Card>
    )
}