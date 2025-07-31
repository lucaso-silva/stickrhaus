import ItemList from './ItemList.jsx';

export default function AllItems({stickers}){


    return(
        <>
            <h3 className="mt-2 mb-4">The Haus Collection</h3>
            <ItemList stickers={stickers}/>
        </>
    )
}