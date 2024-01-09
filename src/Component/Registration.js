import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import {useNavigate  } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function Registration() {

  const email=useRef();
  const username=useRef();
  const password=useRef();
  const passwordAgain=useRef();
  const navigate=useNavigate();
  const [file,setFile]=useState(null);
  const {dispatch}=useContext(AuthContext);
 async function handle(e)
  {
     e.preventDefault();
     console.log(email.current.value)
     console.log(username.current.value)
     console.log(password.current.value)
     console.log(passwordAgain.current.value)
     const dataForm=new FormData();
          
          dataForm.append('file',file);
     if(password.current.value!==passwordAgain.current.value)
     {
        passwordAgain.current.setCustomValidity("Password must be same");
     }else
     {
         const user={
          username:username.current.value,
          email:email.current.value,
          password:password.current.value
         }

         
                 try{
                  const imgName=await axios.post('http://localhost:8000/upload',dataForm, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  
                    
                    
                  });
                  user.profile=`Images/${imgName.data.img}`;
                const data=  await axios.post("http://localhost:8000/auth/register",user)
                  console.log("register success")
                  dispatch({type:"LoginSuccess",payload:data.data})
                  navigate('/')
                 }catch(err)
                 {
                      console.log("register Error "+err.message)
                 }

     }
  }
  return (
    <>
      <div className='w-full  h-screen flex justify-center items-center border-2 loginBack  border-red-700'>
          <form className='loginBox p-4 rounded-lg' onSubmit={handle}>
              <div>
                <input ref={username} required className='bg-transparent outline-none p-2 m-2 text-black text-xl' type="text" placeholder='Enter username' />
              </div>
              <div>
                <input ref={email} required className='bg-transparent outline-none p-2 m-2 text-black text-xl' type="email" placeholder='Enter email' />
              </div>
              <div>
                <input ref={password} required minLength={'6'} className='bg-transparent outline-none p-2 m-2 text-black text-xl' type="password" placeholder='Enter password' />
              </div>
              <div>
                <input ref={passwordAgain} required minLength={'6'} className='bg-transparent outline-none p-2 m-2 text-black text-xl' type="password" placeholder='Enter password again' />
              </div>
              <div>
                <input onChange={(e)=>{setFile(e.target.files[0])}}  required  className='bg-transparent outline-none p-2 m-2 text-black text-xl' type="file" placeholder='Choose profile picture' />
              </div>
              <div>
                <button className='font-bold  p-3 rounded-lg feedBtn ' type='submit'>Registration</button>
              </div>
          </form>
       </div>
    </>
  )
}

export default Registration
