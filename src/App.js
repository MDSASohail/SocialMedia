
import Home from './Pages/Home';
import './App.css';
import Login from './Component/LoginPage'
import {Navigate, Route,Routes, redirect} from 'react-router-dom'
import Registrarion from './Component/Registration'
import Profile from './Component/Profile';
import Practice from './Context/Practice';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
function App() {
  const {user}=useContext(AuthContext)
  console.log("In app user is "+user)
  return (
    <>
     
     <Routes>
        <Route path='/' element={user?<Home/>:<Login/>}/>
        <Route path='/login' element={user?<Navigate to={'/'}/>:<Login/>}/>
        <Route path='/register' element={<Registrarion/>}/>
        <Route path='/profile/:username' element={<Profile/>}/>
     </Routes>
     
    </>
  );
}

export default App;
