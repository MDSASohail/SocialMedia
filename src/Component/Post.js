// import img from "../Images/Danish.jpg";

import { useState } from "react";

// import full from "../Images/full.jpeg";
function Post({post}) {
  const {img,userId,likes,desc}=post;
  const [liked,setLike]=useState(false);
  return (
    <>
      <div className="postDiv m-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={img} className="w-8 mr-3 bg-white h-8 profileImg rounded-full" alt="" />
            <strong className="mr-4">{userId}</strong>
            <span className="text-sm"></span>
          </div>
          <div>
            <svg
              className="w-6 h-6 text-gray-800 cursor-pointer dark:text-white"
              ariaHidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 4 15"
            >
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </div>
        </div>
        <div className="mt-2">{desc}</div>
        <div className="my-2">
          <img className="h-96 mx-auto " src="" alt="" />
        </div>

        <div className="flex justify-between mt-3 items-center">
          <div className="flex items-center">
            <svg
              className="w-6 ml-3 h-6 p-1 text-white cursor-pointer bg-red-400 rounded-full flex justify-center items-center  dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 19"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
              />
            </svg>
            <svg
              className="w-6 ml-3 h-6 p-1 text-white cursor-pointer bg-blue-400 rounded-full flex justify-center items-center dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              onClick={()=>{setLike(!liked)}}
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66"
              />
            </svg>
            <span className="text-sm ml-3">{liked?likes+1:likes} people like it</span>
          </div>
          <span className="text-sm"> comments</span>
        </div>
      </div>
    </>
  );
}

export default Post;
