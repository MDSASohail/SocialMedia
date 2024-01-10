
import Home from './Pages/Home';
import './App.css';
import Login from './Component/LoginPage'
import {Navigate, Route,Routes, redirect, useNavigate} from 'react-router-dom'
import Registrarion from './Component/Registration'
import Profile from './Component/Profile';
import Practice from './Context/Practice';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Context/AuthContext';
import Navbar from './Component/Navbar';
function App() {
  const {user}=useContext(AuthContext)
  console.log("In app user is "+user)
  const navigate=useNavigate();
  useEffect(()=>{
    if(user)
     {
       navigate('/');
     }else
     {
       navigate('/login');
     }
  },[])
  return (
    <>
     
     {user&&<Navbar/>}
     <Routes>
        <Route path='/' element={user&&<Home/>}/>
        <Route path='/login' element={user?<Navigate to={'/'}/>:<Login/>}/>
        <Route path='/register' element={<Registrarion/>}/>
        <Route path='/profile/:username' element={user?<Profile/>:<Navigate to={'/login'}/>}/>
     </Routes>
     
    </>
  );
}

export default App;
