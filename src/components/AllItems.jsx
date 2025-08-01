import ItemList from './ItemList.jsx';

export default function AllItems({stickers}){
    const card_width = "col-5 col-md-4 col-lg-2";

    return(
        <>
            <h3 className="mt-2 mb-4">The Haus Collection</h3>
            <ItemList stickers={stickers} card_width={card_width}/>
        </>
    )
}