import {createContext, useReducer} from "react";

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
            const found = cart.find(item=>item._id === action.id);
            if(found){
                cart.map((item)=>{
                    if(item._id === action.id){
                        return {...item, qty: item.qty+=action.qty}
                    }
                })
            } else {
                const newItem = {id: action.id, description: action.description, price: action.price, qty: action.qty}
                return [...cart, newItem];
            }
            return cart;
        }
        case 'remove':{
            console.log(action.id);
            return cart.filter((item)=> item._id !== action.id);
        }
        case 'decrease': {
            cart.map((item)=>{
                if(item._id === action.id){
                    // console.log("qty: " + item.qty);
                    console.log(cart);
                    if(item.qty===1){
                        console.log("hi!!");
                        return cart.filter(item=>item._id !== action.id);
                    }else{
                        return {...item, qty: item.qty-=1}
                    }
                }
                return cart;
            })

            // if(action.qty<=1){
            //     return cart.filter(item=>item.id !== action.id);
            // }else{
            //     cart.map((item)=>{
            //         if(item.id===action.id){
            //             return {...item, qty:item.qty-=1}
            //         }
            //     })
            // }
            return cart;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}