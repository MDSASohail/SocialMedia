import {useReducer,createContext} from 'react'
import reducer from './AuthReducer';
const initialState={
    user:null,
    isFetching:false,
    error:false
}

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    return(
        <AuthContext.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch}}>
            {children}
        </AuthContext.Provider>

    )
}