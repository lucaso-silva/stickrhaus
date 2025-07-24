import { Stack, ListGroup } from 'react-bootstrap';
import ItemModal from "././ItemModal.jsx";

export default function ItemEditRow({ sticker, delItem, toShow  }) {
    // console.log(sticker);

    return(
        <>
            <Stack direction="horizontal" gap={3}>
                <div><img src="https://placehold.co/60x70" alt="item" /></div>
                <div>
                    <p>Description: {sticker.description}</p>
                    <p>Price: {sticker.price}</p>
                </div>
                <div className="ms-auto d-flex flex-column justify-content-between">
                    <i className="bi bi-trash3 clickable toDel" onClick={()=>delItem(sticker._id)}></i>
                    <i className="bi bi-pencil-square clickable toEdit" onClick={()=>toShow(sticker._id)}></i>
                </div>
            </Stack>

        </>


    )
}