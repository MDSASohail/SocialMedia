import React, { useContext, useEffect, useState,useRef } from 'react'
import axios from 'axios'
import LeftSidebar from '../Messenger/MessengerLeftSidebar'
import Middle from '../Messenger/MessengerMiddle'
import RightSidebar from '../Messenger/MessengerRightSidebar'
import {AuthContext} from '../Context/AuthContext'
import {io} from 'socket.io-client'
function MessengerHome() {

  const {user}=useContext(AuthContext);
  const [conversation,setConversation]=useState([]);
  const [currentChat,setCurrentChat]=useState([{"currentChat._id":"12"}]);
  const [messages,setMessages]=useState([]);
  const [arrivalMsg,setArrivalMsg]=useState(null)
  const text=useRef();
  const [currentText,setCurrentText]=useState("");
  const scrollView=useRef();
  console.log(messages)
  console.log("Above are all messsaag")
  const socket=useRef()
  useEffect(()=>{
    
    socket.current = io("wss://socket-for-social-media.vercel.app:8001");
    // socket.current=io("ws://localhost:8001");
    console.log("Socket is ",socket.current)
    
    // try {
    //   // socket.current = io("wss://socket-for-social-media.vercel.app:8001");
    //   socket.current=io("ws://localhost:8001");
    //   console.log("Socket is ",socket.current)
    // } catch (error) {
    //   console.log(error)
    // }
//     socket.current.socket.onopen = function(event) {
//       console.log("WebSocket is connected!");
//       // You can perform additional actions here upon successful connection
//   };
//   socket.current.socket.onerror = function(error) {
//     console.error("WebSocket error:", error);
// };
    // origin: "https://mdsasohail.github.io",         origin:'http://localhost:3000',
    // https://socket-for-social-media.vercel.app/
    console.log("In setArrivalMSG")
    socket.current.on("getMessage",data=>{
              setArrivalMsg({
                senderId:data.senderId,
                text:data.text,
                createdAt:Date.now()
              })
    })
  },[])
//   socket.current.onopen = function(event) {
//     console.log("WebSocket is connected!");
//     // You can perform additional actions here upon successful connection
// };

// socket.current.onerror = function(error) {
//     console.error("WebSocket error:", error);
// };

  useEffect(() => {
    console.log("ArrivalMsg effect triggered");
    console.log("arrivalMsg:", arrivalMsg);
    console.log("currentChat:", currentChat);
    arrivalMsg && currentChat?.members.includes(arrivalMsg.senderId) && setMessages((prev) => [...prev, arrivalMsg]);

 
    console.log("FinnalMSG ",messages)
  }, [arrivalMsg, currentChat]);
  


  useEffect(()=>{
    const  getAllConversation=async ()=>{
      try{
              const con= await axios.get(`https://rest-api-gules.vercel.app/conversation/${user._id}`);
              // console.log("Login user id is "+JSON.stringify(user))
              setConversation(con.data);
              // console.log("Login user all conversation is "+JSON.stringify(con.data));
      }catch(err)
      {
         console.log("Error in getting conversation "+err.message)
      }
    }
    getAllConversation();
  },[user]);


  useEffect(()=>{
            const allmessagesOfCurrentChat=async ()=>{
              const m= await axios.get(`https://rest-api-gules.vercel.app/message/${currentChat._id}`);
              setMessages(m.data);
              // console.log("Current Particular conversation is messages is "+JSON.stringify(m.data));
              // console.log("Current chat conversation is "+JSON.stringify(currentChat))
            }
            allmessagesOfCurrentChat();
  },[currentChat]);

useEffect(()=>{
   scrollView.current?.scrollIntoView({behavior:"smooth"});
},[messages])


useEffect(()=>{
  socket.current.emit("addUser",user._id);
  socket.current.on("getUsers",users=>{
    // console.log(users)
    // console.log("Getted users are above")
  })
  
},[user])

// console.log(socket)
 async function handleSubmit(e)
  {
     e.preventDefault();
     const newMessage={
        senderId:user._id,
        conversationId:currentChat._id,
        text:currentText
     }
 const receiverId=currentChat.members.find((member)=>member!=user._id);
 console.log("Receiver id is "+receiverId)
 socket.current.emit("sendMessage",{
  senderId:user._id,
  receiverId,
  text:currentText
 })

 setMessages((pre)=>[...pre,{
  senderId:user._id,
  receiverId,
  text:currentText
 }])
 console.log("Current text is ",currentText)
 
     try {
             const saved=await axios.post(`https://rest-api-gules.vercel.app/message/`,newMessage);
             console.log("Messages after saving is  ",messages);
             
             setCurrentText("");
     } catch (error) {
      console.log("Error in sending messages "+error.message)
     }
  }
  // console.log(user)
  return (
    <>
       
       <div className='grid maingrid  relative'>
        
        <div  className=" leftSidebar  hide relative  mr-2">
          <div className='sticky top-20'>
          <div className='border-b-2 '>
            <input className='text-xl outline-none bg-transparent  p-1' type="text" placeholder='Search' />
        </div>
            {conversation.map((i)=><div onClick={()=>{setCurrentChat(i)}}><LeftSidebar  con={i} user={user}/></div>)}
          
          </div>
        </div>
        
         <div className=' max-h-96 border-2 '>

              {currentChat?<><div className='border-2  h-full hidescrollBar overflow-x-hidden overflow-scroll  '>
              {messages.map((m)=><div ref={scrollView}><Middle mess={m} me={m.senderId===user._id}/></div>)}
              
              
              </div>
              <div id="" className='flex mt-2'>
                  <textarea ref={text} value={currentText} onChange={(e)=>{setCurrentText(e.target.value)}} id="" className='border-2 justify-around mr-2 w-full p-2 outline-none'  placeholder='Type message'></textarea>
                  <button className='bg1 rounded-lg font-bold p-2' onClick={(e)=>{handleSubmit(e)}}>Send </button>
              </div></>:<div className='text-xl text-center mt-2'>Select a member to start a conversation</div>}

              
              
         </div>
        <div className=' hide rightSidebar ml-2'>
          <div className='sticky top-20'>
          <RightSidebar/>
          <RightSidebar/>
          <RightSidebar/>
          </div>
        </div>
         
       </div>
    </>
  )
}

export default MessengerHome
