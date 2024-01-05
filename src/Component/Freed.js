import React, { useEffect } from 'react'
import Share from './Share'
import Post from './Post'

import {useState} from 'react';
import axios from 'axios'
import Registration from './LoginPage'
function Freed({userId}) {
  const [allpost,SetallPost]=useState([])
  //Here , I have to render all the posts according to newest
  const id='651e699c40ed0e3942b1af74';
  useEffect(()=>{
    const getPost=async()=>{
       const data=userId ?await axios.get(`http://localhost:8000/post/get/${userId}`) :await axios.get(`http://localhost:8000/post/all`);
       
       SetallPost(data.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
       }));
       console.log("All post is "+allpost+" and user id is "+userId);
    }
    getPost();
  },[])
  return (
    <>
        <div>
            <Share/>
            
            {allpost.map((item)=>{
              return <Post key={item._id} post={item}/>
            })}
            
            
        </div>
    </>
  )
}

export default Freed
