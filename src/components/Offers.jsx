import ItemList from "./ItemList.jsx";

export default function Offers({stickers}) {
    const card_width = "col-5 col-sm-10 col-md-8 col-lg-5";

    return (
        <>
            <h3 className="mt-2 mb-4">Special Offers</h3>
            <ItemList stickers={stickers} card_width={card_width}/>
        </>
    )
}