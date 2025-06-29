import ItemList from "./ItemList.jsx";

export default function Offers({stickers}) {
    return (
        <>
            <h2>Special Offers</h2>
            <ItemList stickers={stickers}/>
        </>
    )
}