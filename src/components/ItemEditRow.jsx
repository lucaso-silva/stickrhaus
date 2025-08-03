import { Stack, ListGroup } from 'react-bootstrap';
import ItemModal from "././ItemModal.jsx";

export default function ItemEditRow({ sticker, delItem, toShow  }) {
    return(
        <>
            <Stack className="col-md-10 mx-auto ms-lg-0" direction="horizontal" gap={3}>
                <div><img src="https://placehold.co/60x70" alt="item" /></div>
                <div>
                    <p><span className="fw-semibold">Description:</span> {sticker.description}</p>
                    <p><span className="fw-medium">Price:</span> {sticker.discountPerCent > 0 ? <span className="text-danger">{(sticker.price - sticker.price*sticker.discountPerCent/100).toFixed(2)}</span> : <span>{sticker.price}</span>}</p>
                </div>
                <div className="ms-auto d-flex flex-column gap-3">
                    <div>
                        <i className="bi bi-trash3 clickable toDel" onClick={()=>delItem(sticker._id)}></i>
                    </div>
                    <div>
                        <i className="bi bi-pencil-square clickable toEdit" onClick={()=>toShow(sticker._id)}></i>
                    </div>
                </div>
            </Stack>

        </>


    )
}