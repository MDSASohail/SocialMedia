import React from 'react'
import img from '../Images/Sohail.png'
function MessengerRightSidebar() {
  return (
    <>
      <div >
      <div className='flex hoverEffect relative border-b-2 rounded-md cursor-pointer p-1 items-center '>
            <img className='w-8 h-8 rounded-full' src={img} alt="" />
            <p><strong>Md. Sohail Ansari</strong></p>
            <p className="absolute w-2 h-2 top-0 left-8 rounded-full bg-green-500"></p>
        </div>
        
      </div>
    </>
  )
}

export default MessengerRightSidebar
