import img from "../Images/Ava.jfif";
import {useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';
import {Link} from 'react-router-dom'
function Navbar() {
  const {user}=useContext(AuthContext);
  return (
    <>
      <div className="navbar sticky top-0 flex items-center px-4 z-10">
        <div className="left  text-2xl font-bold">Sohail</div>

        <div className="middle  ">
          <div className="flex items-center   w-full">
            <div className="w-full flex  ">
              <input
                className="w-full pl-4 outline-none text-xl bg-transparent "
                type="text"
                placeholder="Search here"
              />
              <svg
                className="w-7 h-7 pr-2 cursor-pointer bg-transparent text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="right flex justify-around items-center">
          <div className="homepage">
            <span className="m-1 cursor-pointer">Homepage</span>
            <span className="m-1 cursor-pointer">Timeline</span>
          </div>
          <div className="notiphication flex">
            <div className="ml-3 cursor-pointer relative">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM4 3 3 2M2 7H1m15-4 1-1m1 5h1M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"
                />
              </svg>
              <span className="absolute rounded-full text-sm w-4 h-4 navbarMsg  -top-2 p-0 -right-1  flex items-center justify-center  ">1</span>
            </div>
            <div className="ml-3 relative cursor-pointer">
              <svg
                className="w-6 h-6 text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
              <span className="absolute rounded-full text-sm w-4 h-4   -top-2 p-0 -right-1 navbarMsg flex items-center justify-center  ">1</span>
            </div>
            <div className="ml-3 relative cursor-pointer">
              <svg
                className="w-6 h-6 text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
              <span className="absolute rounded-full text-sm w-4 h-4   -top-2 p-0 -right-1 navbarMsg flex items-center justify-center  ">1</span>
            </div>
          </div>
          <div className="profile rounded-full overflow-hidden ">
            <Link to={`/profile/${user._id}`}>
            
            <img src={img} className="w-10 profileImg h-10 bg-cover" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
