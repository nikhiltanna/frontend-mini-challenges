import React,{useState} from 'react';
import data from "./assets/Data.json"
 

export const Showitem=({title,content,sh})=>
{
    const [show,setShow]=useState(sh);
    return(
    <>
    <div className='border mx-20'>
        <div className=' flex'>
            <h1>{title}</h1>
            <div className='border grey'>
            <button onClick={()=>(setShow(!show))}>{show?(<>-</>):(<>+</>)}</button>
            </div>
        </div>
        {show?(<p>{content}</p>):(null)}
        </div>
    </>
    )
}