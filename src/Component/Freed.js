import React, { useEffect } from 'react'
import Share from './Share'
import Post from './Post'
import {posts} from '../Data/Data'
import {useState} from 'react';
import axios from 'axios'
function Freed() {
  const [allpost,SetallPost]=useState([]);
  const id='651e699c40ed0e3942b1af74';
  useEffect(()=>{
    const getPost=async()=>{
       const data=await axios.get(`http://localhost:8000/post/get/${id}`);
       const d=data.data;
       SetallPost(d);
    }
    getPost();
  },[id])
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
