import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import cover from '../Images/Cover.jfif'
import Ava from '../Images/Ava.jfif'
import Freed from './Freed'
import {useParams} from 'react-router-dom'
function Profile()
{
    const userId=useParams().username;
    console.log("Params is "+userId)
    const {user}=useContext(AuthContext)
    return(
        <>
          <div className="border-2 border-green-400  ">
              <div className='h-60'>
                  <img src={user.cover?user.cover:cover} className='w-full h-full'/>
              </div>
              <div className='relative border-2 h-40 border-amber-500'>
                <img src={user.profile?user.profile:Ava} className='absolute w-32 h-32 left-1/2 -top-10 -translate-x-1/2    rounded-full'/>
                <strong className='absolute text-2xl top-24 left-1/2 -translate-x-1/2'>{user.username}</strong>
              </div>
              
          </div>
          <Freed userId={userId}/>
        </>
    )
}


 export default Profile;