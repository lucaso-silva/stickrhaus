import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Sections from "../components/Sections.jsx";
import Footer from "../components/Footer.jsx"
import {useEffect, useState} from "react";

export default function Home(){
    const [ stickers, setStickers ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const [ offers, setOffers ] = useState([]);
    const [ cart, setCart ] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:4000/api/stickers`)
            .then(res=> res.json())
            .then(data => {
                setStickers(data);

                let itemsInOffer = data.filter((item)=>item.discountPerCent > 0);

                setOffers(itemsInOffer);
                setLoading(false);
            });
    },[]);

    function addToCart(sticker){
        console.log("clicked");
        // console.log(sticker);
    }

    return(
        <>
            <Header />
            <Banner />
            <Sections allItems={stickers} inOffer={offers} addItem={addToCart}/>
            <Footer />
        </>
    )
}