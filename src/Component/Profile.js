import cover from '../Images/Cover.jfif'
import Freed from './Freed'
import {useParams} from 'react-router-dom'
function Profile()
{
    const userId=useParams().username;
    console.log("Params is "+userId)
    return(
        <>
          <div className="border-2 border-green-400  ">
              <div className='h-60'>
                  <img src={cover} className='w-full h-full'/>
              </div>
              <div className='relative border-2 h-40 border-amber-500'>
                <img src={cover} className='absolute w-32 h-32 left-1/2 -top-10 -translate-x-1/2    rounded-full'/>
                <strong className='absolute text-2xl top-24 left-1/2 -translate-x-1/2'>Md. Sohail Ansari</strong>
              </div>
              
          </div>
          <Freed userId={userId}/>
        </>
    )
}


 export default Profile;