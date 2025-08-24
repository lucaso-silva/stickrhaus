import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext([]);
const WishlistDispatchContext = createContext(null);

const initialWishlist = [];

export function WishlistProvider({ children }) {
    const [ wishlist, dispatch ] = useReducer(
        wishlistReducer,
        initialWishlist ? initialWishlist : []
    );

    return (
        <WishlistContext value={wishlist}>
            <WishlistDispatchContext value={dispatch}>
                { children }
            </WishlistDispatchContext>
        </WishlistContext>
    )
}

export function useWishlist(){
    return useContext(WishlistContext);
}

export function useWishlistDispatch(){
    return useContext(WishlistDispatchContext);
}

function wishlistReducer(wishlist, action){
    switch(action.type){
        case 'add': {
            const found = wishlist.find(item => item._id === action.favourite._id);
            console.log("sticker added: ", action.favourite);
            if(!found){
                return [...wishlist, action.favourite];
            }
            return [...wishlist];
        }
        case 'remove': {
            return wishlist.filter(item => item.id !== action.favourite.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}