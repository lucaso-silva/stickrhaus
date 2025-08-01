import ItemCard from './ItemCard';

export default function ItemList({stickers, card_width}) {
    return(
        <div className="d-flex flex-wrap gap-1 justify-content-around">
            {stickers.map((item) => <ItemCard key={item._id} sticker={item} card_width={card_width} />)}
        </div>
    )
}