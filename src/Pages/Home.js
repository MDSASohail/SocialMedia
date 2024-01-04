import React, { useContext } from 'react'
import Navbar from '../Component/Navbar'
import RightSideBar from '../Component/RightSideBar'
import Freed from '../Component/Freed'
import Profile from '../Component/Profile'
// import RightSideBar from '../Component/RightSideBar'
import LeftSideBar from '../Component/LeftSideBar'
import {Route,Routes } from 'react-router-dom'

function Home() {
  
  return (
    <div >
      <Navbar/>
      <div className='flex   base'>
        <div className='leftSideBar'>
           <LeftSideBar/>
        </div>
        <div className="freed">

        <Freed/>
        
        </div>
        <div className="rightSideBar ">

        <RightSideBar/>
        </div>
      </div>
    </div>
  )
}

export default Home
