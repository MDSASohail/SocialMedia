import React, { useContext, useRef, useState } from "react";
import img from "../Images/Ava.jfif";
import { AuthContext } from "../Context/AuthContext";
import axios from 'axios'
function Share() {
  const {user} =useContext(AuthContext);
  const [file,setFile]=useState([]);
  const msg=useRef();

  const handleSubmit=async(e)=>{
       e.preventDefault();
       console.log(user._id);
       console.log("Message is "+msg.current.value)
       const newPost={
        userId:user._id,
        desc:msg.current.value
       }

       if(file)
       {
          const data=new FormData();
          const filename=Date.now()+file.name;
          data.append('file',file);
          data.append('userId',user._id);
          data.append('desc',msg.current.value)
          console.log("The file name i "+filename)
          try {
          await  axios.post('http://localhost:8000/upload', data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  
});
window.location.reload();
          } catch (error) {
            console.log("Error in file uploding")
          }
       }

      //  try {
      //   await axios.post('http://localhost:8000/post/',newPost);
      //  } catch (error) {
      //   console.log("Error in posting")
      //  }
  }
  return (
    <>
      <form className="p-4 m-4 share-Div" onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="flex ">
          <img className="w-12 h-12 mr-3 rounded-full" src={user.profile?user.profile:img} alt="" />
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder={`What's in your mind ${user.username} ?`}
            ref={msg}
          />
        </div>
        <hr className="my-3 font-bold" />
        <div className="flex">
          <label htmlFor="file" className="flex items-center mr-6">
            <svg
              class="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                fill="currentColor"
                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
              />
            </svg>
            <span className="ml-2 text-sm">Video or Photo</span>
            <input type="file" id="file" accept=".jpg, .jpeg,.png" onChange={(e)=>{setFile(e.target.files[0])}} className=" hidden"/>
          </label>
          <div className="flex items-center mr-6">
            <svg
              class="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M15.045.007 9.31 0a1.965 1.965 0 0 0-1.4.585L.58 7.979a2 2 0 0 0 0 2.805l6.573 6.631a1.956 1.956 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 18 8.479v-5.5A2.972 2.972 0 0 0 15.045.007Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
            <span className="ml-2 text-sm">Tag</span>
          </div>
          <div className="flex items-center mr-6">
            <svg
              class="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            <span className="ml-2 text-sm">Location</span>
          </div>
          <div className="flex items-center mr-6">
            <svg
              class="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
            </svg>
            <span className="ml-2 text-sm">Feeling</span>
          </div>
          <button type="submit" className="feedBtn ml-4 py-3 rounded-md font-bold px-5">
            Send
          </button>
        </div>
      </form>
    </>
  );
}

export default Share;
