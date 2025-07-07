import { createContext, useReducer } from "react";

export const CartContext = createContext([]);
export const CartDispatchContext = createContext(null);

export function CartProvider({ children }){
    const [ cart, dispatch ] = useReducer(
        cartReducer,
        []
    );

    return(
        <CartContext value={cart}>
            <CartDispatchContext value={dispatch}>
                { children }
            </CartDispatchContext>
        </CartContext>
    )
}

function cartReducer(cart, action){
    switch(action.type){
        case 'add':{
            console.log("added");
            const newItem = {id: action.id, description: action.description, price: action.price, qty: action.qty}
            return [...cart, newItem];
        }
        case 'remove':{
            console.log("remove");
            return cart.filter(item=>item.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}