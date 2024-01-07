import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import cover from '../Images/Cover.jfif'
import Ava from '../Images/Ava.jfif'
import Freed from './Freed'
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar'
import {useParams} from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';
function Profile()
{
    const userId=useParams().username;
    console.log("Params is "+userId) 
    const {user}=useContext(AuthContext);
    const [profileData,setProfileData]=useState([]);
    useEffect(()=>{
        const getProfileDetail=async()=>{
          try {
            const data=await axios.get('http://localhost:8000/user/get/'+userId);
            setProfileData(data.data);
          } catch (error) {
            console.log(error)
          }


        }

        getProfileDetail();
    },[userId])
    return(
        <>
          {/* <div className='flex'>
              <div>
                  <Left/>
              </div>
              <div>
              <div>
            
            </div><div className="border-2 border-green-400  ">
              <div className='h-60'>
                  <img src={user.cover?user.cover:cover} className='w-full h-full'/>
              </div>
              <div className='relative border-2 h-40 border-amber-500'>
                <img src={user.profile?user.profile:Ava} className='absolute w-32 h-32 left-1/2 -top-10 -translate-x-1/2    rounded-full'/>
                <strong className='absolute text-2xl top-24 left-1/2 -translate-x-1/2'>{user.username}</strong>
              </div>
              
          </div>
          <Freed userId={userId}/>
              </div>
              <div>
               <Right/>
              </div>
          </div> */}
          <Navbar/>
          <div className='flex   base'>
        <div className='leftSideBar'>
           <LeftSideBar/>
        </div>
        <div className="freed">
        <div className="border-2 border-green-400  ">
              <div className='h-60'>
                  <img src={profileData.cover?`http://localhost:8000/${profileData.cover}`:cover} className='w-full h-full'/>
              </div>
              <div className='relative border-2 h-40 border-amber-500'>
                <img src={profileData.profile?`http://localhost:8000/${profileData.profile}`:Ava} className='absolute w-32 h-32 left-1/2 -top-10 -translate-x-1/2    rounded-full'/>
                <strong className='absolute text-2xl top-24 left-1/2 -translate-x-1/2'>{profileData.username}</strong>
              </div>
              
          </div>
          

        <Freed userId={userId}/>
        
        </div>
        <div className="rightSideBar ">
                 <button className=' px-2 ml-4 mt-3 text-2xl followBTN rounded-md'>Follow</button>
        <RightSideBar/>
        </div>
      </div>
        </>
    )
}


 export default Profile;