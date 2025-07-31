import ItemEditRow from "./ItemEditRow.jsx";
import {useEffect, useState} from "react";
import ItemModal from "././ItemModal.jsx";
import {Form, Stack} from 'react-bootstrap';

export default function ListToEdit(){
    const [items, setItems] = useState([]);
    const [ showModal, setShowModal ] = useState(false);
    const [ itemToEdit, setItemToEdit ] = useState(null);
    const api = import.meta.env.VITE_API_URL;

    const filterStickers = (e)=>{
        if(e.target.value.length > 0){
            const filteredStickers = items.filter((item)=>{
                if(item.description.toLowerCase().includes(e.target.value.toLowerCase()) || item.category.toLowerCase().includes(e.target.value.toLowerCase())){
                    return item;
                }
            })
            setItems(filteredStickers);
        } else {
            displayItems();
        }
    }

    useEffect(() => {
        displayItems();
    }, []);

    const handleClose = () => {
        setItemToEdit(null);
        setShowModal(false)
    };

    const handleDisplayItem = async (id) => {
        await fetch(`${api}/api/stickers/${id}`)
            .then(res => res.json())
            .then(data=>{
                setItemToEdit(data);
            })
                setShowModal(true);
    };

    const displayItems = async () => {
        await fetch(`${api}/api/stickers`)
            .then(res => res.json())
            .then(data => {
                setItems(data.data);
            });
    }

    const handleDelete = (id) => {
        fetch(`${api}/api/stickers/${id}`,{
            method: 'DELETE',
        })
            .then(res=>res.json())
            .then(data => {
                alert(data.message);
                displayItems();
            });
    }

    return(
        <>
            <Stack direction="horizontal">
                <div><h4>Edit</h4></div>
                <div className="ms-auto">
                    <Form.Control type="text" placeholder="Type name or category" onChange={filterStickers}/>
                </div>
            </Stack>
            { items.map(item => <ItemEditRow key={item._id}
                                             sticker={item}
                                             delItem={handleDelete}
                                             toShow={handleDisplayItem}
                                    />)
            }
            {itemToEdit ? <ItemModal show={showModal}
                                     handleClose={handleClose}
                                     sticker={itemToEdit}
                                     updtList={displayItems}
                            /> :
                ""}
        </>

    )
}