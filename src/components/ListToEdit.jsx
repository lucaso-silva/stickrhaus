import ItemEditRow from "./ItemEditRow.jsx";
import {useEffect, useState} from "react";
import ItemModal from "././ItemModal.jsx";

export default function ListToEdit(){
    const [items, setItems] = useState([]);
    const [ showModal, setShowModal ] = useState(false);
    const [ itemToEdit, setItemToEdit ] = useState(null);

    useEffect(() => {
        displayItems();
    }, []);

    const handleClose = () => {
        setItemToEdit(null);
        setShowModal(false)
    };

    const handleShow = async (id) => {
        await fetch(`http://localhost:4000/api/stickers/${id}`)
            .then(res => res.json())
            .then(data=>{
                // console.log("item to edit (fetch): ", data);
                // console.log("item to edit (state): ", itemToEdit);
                setItemToEdit(data);
                // console.log("item to edit pos setItemToEdit (state): ", itemToEdit);
            })
                setShowModal(true);
    };

    // useEffect(()=>{
    //     setShowEditItem(true);
    // },[itemToEdit]);

    // const handleUpdate = (id, form) =>{
    //     // const updInfo = form;
    //     console.log("form info: ",form.description.value);
    //     // const res = await fetch(`http://localhost:4000/api/stickers/${id}`,{
    //     //     method: 'PATCH',
    //     //     headers: {'Content-type': 'application/json'},
    //     //     body: JSON.stringify({ description, size, price: Number(price), category, stock: Number(stock), discountPerCent: Number(discountPerCent) })
    //     // });
    //     // const data = await res.json();
    //     // console.log("updated: ", data);
    //     // if(res.ok){
    //     //     alert("item updated!");
    //     //     handleClose();
    //     // }
    // }

    const displayItems = async () => {
        await fetch('http://localhost:4000/api/stickers')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/api/stickers/${id}`,{
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
            <h4>Edit</h4>
            { items.map(item => <ItemEditRow key={item._id}
                                             sticker={item}
                                             delItem={handleDelete}
                                             toShow={handleShow}
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