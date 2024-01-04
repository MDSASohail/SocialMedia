import {useContext, useRef} from 'react';
import { AuthContext } from '../Context/AuthContext';
import { APICall } from './Apicall';

function LoginPage() {
  const username=useRef();
  const password=useRef();
 const {user,isFetching,error,dispatch}=useContext(AuthContext)
  const handleClick=(e)=>
  {
    
     console.log("Data is "+username.current.value,password.current.value);
     e.preventDefault();
     APICall({username:username.current.value,password:password.current.value},dispatch)
     console.log("User Is "+user)
  }
  console.log("After fetching user is "+user)
  return (
    <>
       <div className='w-full  h-screen flex justify-center items-center border-2 loginBack  border-red-700'>
          <form onSubmit={(e)=>{handleClick(e)}}  className='loginBox p-4 rounded-lg'>
              <div>
                <input required ref={username}  name='username' className='bg-transparent outline-none p-2 m-2 text-black text-xl' type="text" placeholder='Enter username' />
              </div>
              <div>
                <input required ref={password}  name='password' className='bg-transparent outline-none p-2 m-2 text-black text-xl' type="password" placeholder='Enter password' />
              </div>
              <div>
                <button className='font-bold  p-3 rounded-lg feedBtnt'  > {isFetching?"Loading":"Login"}</button>
              </div>
              <div>{error?"Username or Password is Wrong":""}</div>
          </form>
       </div>
    </>
  )
}

export default LoginPage
