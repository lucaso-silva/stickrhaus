import { createContext, useContext, useReducer } from "react";

export const LoggedUserContext = createContext(null);
export const LoggedUserDispatchContext = createContext(null);

export function LoggedUserProvider({children}){
    const [user, dispatch] = useReducer(
        LoggedUserReducer,
        null
    );

    return(
        <LoggedUserContext value={user}>
            <LoggedUserDispatchContext value={dispatch}>
                { children }
            </LoggedUserDispatchContext>
        </LoggedUserContext>
    )
}

function LoggedUserReducer(user, action){
    switch (action.type){
        case 'login': {
            return action.loggedUser;
        }
        case 'logout': {
            return action.loggedUser;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export function useLoggedUser(){
    return useContext(LoggedUserContext);
}

export function useLoggedUserDispatch(){
    return useContext(LoggedUserDispatchContext);
}