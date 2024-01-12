import React from 'react'
import img from '../Images/Sohail.png'
import {format} from 'timeago.js'
function MessengerMiddle({mess,me}) {
  return (
    <>
        <div className={me?'flex  justify-end   p-2 ':'flex  p-2 '}>
            <div >
            <div className='flex '>
                <img src={img} className='w-10 h-10 mr-2 rounded-full object-cover' alt="" />
                <p className={me?' p-2 rounded-lg bg1 w-96':' p-2 rounded-lg bg2 w-96'}>{mess.text}</p>
            </div>
            <p className={me?"text-end":""}>{format(mess.createdAt)}</p>
            </div>
        </div>
    </>
  )
}

export default MessengerMiddle