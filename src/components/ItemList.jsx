import ItemCard from './ItemCard';
import {useState} from "react";

export default function ItemList({stickers}) {
    const [ cardItems, setCardItems] = useState([]);

    function addToCart(){
        console.log("clicked");
    }

    return(
        <>
            <div className="d-flex gap-2 flex-wrap justify-content-around">
                {stickers.map((item) => <ItemCard key={item.id} sticker={item} btnCmd={addToCart} />)}
            </div>
        </>
    )
}