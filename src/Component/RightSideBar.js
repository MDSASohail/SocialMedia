import React from 'react'
import img from '../Images/Danish.jpg'
function RightSideBar() {
  return (
    <>
       <div className='m-2'>
          <div>
            <strong>Online Friends</strong>
          </div>
          <div className=' mt-2 cursor-pointer rightEachItem flex items-center relative '>
             <img className='w-10 mr-3 profileImg object-fit h-10 rounded-full' src={img} alt="" />
             <span>Danish Raza</span>
             <div className='bg-green-400 w-3 h-3 top-1 left-12 rounded-full absolute'></div>
          </div>
          <div className=' mt-2 cursor-pointer rightEachItem flex items-center relative '>
             <img className='w-10 mr-3 profileImg object-fit h-10 rounded-full' src={img} alt="" />
             <span>Arbaz Khan</span>
             <div className='bg-green-400 w-3 h-3 top-1 left-12 rounded-full absolute'></div>
          </div>
          <div className=' mt-2 cursor-pointer rightEachItem flex items-center relative '>
             <img className='w-10 mr-3 profileImg object-fit h-10 rounded-full' src={img} alt="" />
             <span>Ehtesham Alam</span>
             <div className='bg-green-400 w-3 h-3 top-1 left-12 rounded-full absolute'></div>
          </div>
          <div className=' mt-2 cursor-pointer rightEachItem flex items-center relative '>
             <img className='w-10 mr-3 profileImg object-fit h-10 rounded-full' src={img} alt="" />
             <span>Yogesh Ram</span>
             <div className='bg-green-400 w-3 h-3 top-1 left-12 rounded-full absolute'></div>
          </div>

       </div>
    </>
  )
}

export default RightSideBar
