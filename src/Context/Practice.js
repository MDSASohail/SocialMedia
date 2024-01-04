import {useRef}from 'react';

function Practice()
{

    const d=useRef(null);
    console.log(d);
    function handle()
    {
        console.log(d.current);
    }
    return(
        <>
          <input ref={d}/>
          <div onClick={()=>handle()}>Submit</div>
        </>
        
    )
}

export default Practice;