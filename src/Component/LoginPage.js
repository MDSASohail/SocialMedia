import React from 'react'

function LoginPage() {
  return (
    <>
       <div className='w-full  h-screen flex justify-center items-center border-2 loginBack  border-red-700'>
          <div className='loginBox p-4 rounded-lg'>
              <div>
                <input className='bg-transparent outline-none p-2 m-2 text-black text-xl' type="text" placeholder='Enter username' />
              </div>
              <div>
                <input className='bg-transparent outline-none p-2 m-2 text-black text-xl' type="password" placeholder='Enter password' />
              </div>
              <div>
                <button className='font-bold  p-3 rounded-lg feedBtn '>Login</button>
              </div>
          </div>
       </div>
    </>
  )
}

export default LoginPage
