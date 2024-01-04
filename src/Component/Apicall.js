import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';

export const APICall=async(userCredential,dispatch)=>{
    // const {user}=useContext(AuthContext)
    dispatch({type:"LoginStart"});
    try {
        console.log("In API Call"+userCredential)
        const data=await axios.post('http://localhost:8000/auth/login',userCredential);
        dispatch({type:"LoginSuccess",payload:data.data})
        console.log("In API Call after await "+data.data.username)
    } catch (error) {
        dispatch({type:"LoginFail"})
        console.log(" Fail reason is "+error)
    }
}