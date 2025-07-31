import ItemList from "./ItemList.jsx";

export default function Offers({stickers}) {
    return (
        <>
            <h3 className="mt-2 mb-4">Special Offers</h3>
            <ItemList stickers={stickers}/>
        </>
    )
}