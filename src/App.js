
import Home from './Pages/Home';
import './App.css';
import Login from './Component/LoginPage'
import {Route,Routes} from 'react-router-dom'
import Registrarion from './Component/Registration'
function App() {
  return (
    <>
     {/* <Home/> */}
     {/* <Login/> */}
     {/* <Registrarion/> */}
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registrarion/>}/>
     </Routes>
    </>
  );
}

export default App;
