import { Card, Stack } from 'react-bootstrap';

export default function ItemCard({sticker}) {
    return(
        <Card style={{ width:"10.75vw"}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title> {sticker.description}</Card.Title>
                <Card.Text>Size: {sticker.size}</Card.Text>
                <Card.Text>Price: ${sticker.price}</Card.Text>
                <div className="d-flex justify-content-between">
                        <i className="bi bi-bag-plus"></i>
                        <i className="bi bi-heart"></i>
                </div>
            </Card.Body>
        </Card>
    )
}