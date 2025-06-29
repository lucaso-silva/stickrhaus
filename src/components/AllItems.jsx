import ItemList from './ItemList.jsx';

export default function AllItems({stickers}){


    return(
        <>
            <h2>The Haus Collection</h2>
            <ItemList stickers={stickers}/>
        </>
    )
}