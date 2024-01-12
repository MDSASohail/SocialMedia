import React, { useEffect,useState } from 'react';
import axios from 'axios'
import img from '../Images/Sohail.png'
function MessengerLeftSidebar({con,user}) {
  console.log("In message leftside conversation is "+JSON.stringify(con.members[1]))
  const [member,setMember]=useState([]);
  
  const memberId=con.members.find((id)=>id!=user._id);
  useEffect(()=>{
    const getUser=async()=>{
              try {
                const user=await axios.get(`http://localhost:8000/user/get/${memberId}`);
                      setMember(user.data);
              } catch (error) {
                console.log("Error in message left "+error.message)
              }
    }

    getUser();
  },[con])
  return (
    <>
      <div  >
        
        <div className='flex hoverEffect rounded-md cursor-pointer p-2 mt-2 items-center justify-around'>
            <img className='w-14 h-14 object-cover  rounded-full' src={member.profile?`http://localhost:8000/${member.profile}`:img} alt="" />
            <p><strong>{member.username}</strong></p>
        </div>
        
      </div>
    </>
  )
}

export default MessengerLeftSidebar
