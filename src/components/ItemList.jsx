import ItemCard from './ItemCard';

const data = [
    {
        "id": 1,
        "description": "Grogu",
        "size": "3x3 inch",
        "category": "movies",
        "price": 4.99,
        "stock": 15
    },
    {
        "id": 2,
        "description": "Pink Tulip",
        "size": "2x2 inch",
        "category": "nature",
        "price": 3.49,
        "stock": 18
    },
    {
        "id": 3,
        "description": "Retro Game Controller",
        "size": "2.5x2.5 inch",
        "category": "technology",
        "price": 4.25,
        "stock": 10
    },
    {
        "id": 4,
        "description": "Sun",
        "size": "2x2 inch",
        "category": "nature",
        "price": 2.99,
        "stock": 20
    },
    {
        "id": 5,
        "description": "Stitch",
        "size": "3x3 inch",
        "category": "movies",
        "price": 4.99,
        "stock": 12
    },
    {
        "id": 6,
        "description": "Mountains",
        "size": "3x2 inch",
        "category": "nature",
        "price": 3.75,
        "stock": 9
    },
    {
        "id": 7,
        "description": "Cyber Cat",
        "size": "2.5x2 inch",
        "category": "technology",
        "price": 4.50,
        "stock": 14
    },
    {
        "id": 8,
        "description": "Rainbow Cloud",
        "size": "2x2 inch",
        "category": "abstract",
        "price": 3.25,
        "stock": 20
    },
    {
        "id": 9,
        "description": "Space Rocket",
        "size": "3x1.5 inch",
        "category": "space",
        "price": 3.99,
        "stock": 17
    },
    {
        "id": 10,
        "description": "Butterfly",
        "size": "2.5x2.5 inch",
        "category": "nature",
        "price": 3.50,
        "stock": 16
    },
    {
        "id": 11,
        "description": "Astronaut Peace",
        "size": "3x2 inch",
        "category": "space",
        "price": 4.75,
        "stock": 11
    },
    {
        "id": 12,
        "description": "Cherry Blossom",
        "size": "2x2 inch",
        "category": "nature",
        "price": 3.99,
        "stock": 20
    },
    {
        "id": 13,
        "description": "Pixel Heart",
        "size": "2x2 inch",
        "category": "technology",
        "price": 2.99,
        "stock": 19
    },
    {
        "id": 14,
        "description": "Dragon",
        "size": "3x3 inch",
        "category": "fantasy",
        "price": 5.25,
        "stock": 8
    },
    {
        "id": 15,
        "description": "Star",
        "size": "1.5x1.5 inch",
        "category": "abstract",
        "price": 2.25,
        "stock": 20
    }
]

export default function ItemList({cwidth}) {
    return(
        <>
            <div className="d-flex gap-2 flex-wrap justify-content-around">
                {data.map((item) => <ItemCard key={item.id} sticker={item} cdwidth={cwidth}/>)}
            </div>
        </>
    )
}