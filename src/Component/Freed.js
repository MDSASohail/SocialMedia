import React, { useEffect } from 'react'
import Share from './Share'
import Post from './Post'

import {useState,useContext} from 'react';
import axios from 'axios'
import Registration from './LoginPage'
import {AuthContext} from '../Context/AuthContext'
function Freed({userId}) {
  const [allpost,SetallPost]=useState([])
  //Here , I have to render all the posts according to newest
 
  const id='651e699c40ed0e3942b1af74';
  useEffect(()=>{
    const getPost=async()=>{
       const data=userId ?await axios.get(`https://rest-api-gules.vercel.app/${userId}`) :await axios.get(`https://rest-api-gules.vercel.app/post/all`);
       
       SetallPost(data.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
       }));
      //  console.log("All post is "+allpost+" and user id is "+userId);
    }
    getPost();
  },[userId])
  return (
    <>
        <div>
            {!userId&&<Share/>}
            
            {allpost.map((item)=>{
              return <Post key={item._id} post={item}/>
            })}
            
            
        </div>
    </>
  )
}

export default Freed
