import ItemCard from './ItemCard';

export default function ItemList({stickers}) {

    return(
        <>
            <div className="d-flex gap-2 flex-wrap justify-content-around">
                {stickers.map((item) => <ItemCard key={item._id} sticker={item} />)}
            </div>
        </>
    )
}