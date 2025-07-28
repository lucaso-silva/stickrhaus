import {createContext, useContext, useEffect, useReducer} from "react";

const CartContext = createContext([]);
const CartDispatchContext = createContext(null);

const initialCart = JSON.parse(localStorage.getItem("cart"));

export function CartProvider({ children }){
    const [ cart, dispatch ] = useReducer(
        cartReducer,
        initialCart ? initialCart : []
    );

    return(
        <CartContext value={cart}>
            <CartDispatchContext value={dispatch}>
                { children }
            </CartDispatchContext>
        </CartContext>
    )
}

export function useCart(){
    return useContext(CartContext);
}

export function useCartDispatch(){
    return useContext(CartDispatchContext);
}

function cartReducer(cart, action){
    switch(action.type){
        case 'add':{
            const found = cart.find(item=>item.id === action.id);
            if(found){
                cart.map((item)=>{
                    if(item.id === action.id){
                        return {...item, qty: item.qty+=1}
                    }
                })
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                const newItem = {id: action.id, description: action.description, price: action.price, qty: 1, discountPerCent: action.discountPerCent}
                localStorage.setItem('cart', JSON.stringify([...cart, newItem]));
                return [...cart, newItem];
            }
            console.log("hiii");
            return cart;
        }
        case 'remove':{
            const newCart = cart.filter((item)=> item.id !== action.id);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart
        }
        case 'decrease': {
            cart.map((item)=>{
                if(item.id === action.id){
                    return {...item, qty: item.qty-=1}
                }
            });
            localStorage.setItem('cart', JSON.stringify(cart));
            return cart;
        }
        case 'clear': {
            localStorage.setItem('cart', JSON.stringify(action.cart));
            return action.cart;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}