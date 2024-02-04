import React, { useContext, useEffect, useState } from 'react'
import img from '../Images/Ava.jfif'
import { AuthContext } from '../Context/AuthContext'
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
function RightSideBar() {
   const u=useParams().username;
   // console.log("IN right params is "+u)
   let {user}=useContext(AuthContext);
   // const [user,setUser]=useState([]);
   const [allFollowers,setAllFollowers]=useState([]);
   const [allFollowing,setAllFollowing]=useState([]);
   const [conversation,setConversation]=useState([]);
   const followersID=user.follower.map(item=>item);
   const followingsID=user.following.map(item=>item);
   // console.log("All followers id is "+followersID);
   // console.log("All following id is "+followingsID);
   // console.log("In rightbar "+JSON.stringify(user));
   const para=useLocation();
   
 async function handleClick()
  {
     const pathname=para.pathname;
     const patharray=pathname.split('/')
   //   console.log("User Id is "+user._id);
     console.log(patharray[2])
     const data={senderId:user._id,receiverId:patharray[2]}
     if(!conversation?.some(item=>item.members[1]==patharray[2]))
    {
      console.log("Executing if statement")
      try{
        await axios.post('https://rest-api-gules.vercel.app/conversation/',data)

}catch(err)
{
console.log("Error in rightSideBar making conversation")
}
      
    }

     

  }

  const pathname=para.pathname;
  const patharray=pathname.split('/')
//   console.log("Path array is  "+patharray);
//   console.log(patharray[2])

  useEffect(()=>{

   
   const  getAllConversation=async ()=>{
     try{
             const con= await axios.get(`https://rest-api-gules.vercel.app/conversation/${patharray[2]}`);
             // console.log("Login user id is "+JSON.stringify(user))
             const data= con.data;
             setConversation(data);
            //  console.log("All is Well ",conversation)
            //  console.log("All is Well ",con);
            //  console.log("All is Well ",data)
             // console.log("Login user all conversation is "+JSON.stringify(con.data));
     }catch(err)
     {
        console.log("Error in getting conversation "+err.message)
     }
   }
   getAllConversation()
 },[]);


//  useEffect(()=>{
//    const find=()=>{
//       const s = conversation?.some((item) => Object.keys(item).includes(patharray[2]))


//           console.log("Result is ",s)
//    }

//    find();
//  },[patharray[2]])


  async function gettingUer()
   {
      if(u)
      {
         try {
            const d=await axios.get('https://rest-api-gules.vercel.app/user/get/'+u);
            user=d.data;
      } catch (error) {
       console.log("Error while getting user in RightSidebar");
      }
      }
   }
   useEffect(()=>{
               const followers= async()=>{
                         followersID.map(async(id)=>{
                           try {
                              const eachUser=await axios.get(`https://rest-api-gules.vercel.app/user/get/${id}`)
                              const {username,profile,_id}=eachUser.data;
                              // console.log(" In followers "+username,profile,_id)
                              setAllFollowers([...allFollowers,{username,profile,_id}])
                           } catch (error) {
                              // console.log("Error in fetching followers");
                           }
                         })

                         followingsID.map(async(id)=>{
                           try {
                              const eachUser=await axios.get(`https://rest-api-gules.vercel.app/user/get/${id}`)
                              const {username,profile,_id}=eachUser.data;
                              // console.log(" In following "+username,profile,_id);
                              setAllFollowing([...allFollowers,{username,profile,_id}])
                           } catch (error) {
                              console.log("Error in fetching following");
                           }
                         })
               }

                  gettingUer();
               followers();
   },[u]);
  return (
    <>
       <div className='m-2'>
          <div>
            <strong>All Followers</strong>
          </div>
          {allFollowers.map((item)=>{
            return(
               <Link  to={`/profile/${item._id}`}>
               <div className=' mt-2 cursor-pointer rightEachItem flex items-center relative '>
             <img className='w-10 mr-3 profileImg object-fit h-10 rounded-full' src={item.profile? `https://rest-api-gules.vercel.app/${item.profile}` : img} alt="" />
             <span>{item.username}</span>
             <div className='bg-green-400 w-3 h-3 top-1 left-12 rounded-full absolute'></div>
          </div>
          </Link>
            )
          })}

<div>
            <strong>All Followings</strong>
          </div>
          {allFollowing.map((item)=>{
            return(
               <div className=' mt-2 cursor-pointer rightEachItem flex items-center relative '>
             <img className='w-10 mr-3 profileImg object-fit h-10 rounded-full' src={img} alt="" />
             <span>{item.username}</span>
             <div className='bg-green-400 w-3 h-3 top-1 left-12 rounded-full absolute'></div>
          </div>
            )
          })}

       </div>
       {patharray[2]&&<div className="text-2xl p-2 cursor-pointer" onClick={()=>{handleClick()}}>Message</div>}
    </>
  )
}

export default RightSideBar
