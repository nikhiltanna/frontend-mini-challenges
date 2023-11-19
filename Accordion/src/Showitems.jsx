import React,{useState} from 'react';
import data from "./assets/Data.json"
 

export const Showitems=(props)=>
{
    return(
    <>
    <div className='border mx-20'>
        <div className=' flex'>
            <h1>{props.title}</h1>
            <div className='border grey'>
            <button className="bg-blue-500 text-white mx-1 font-bold py-1 px-1 rounded-full" onClick={()=>(props.shdetails(props.index))}>{props.index==props.sh?(<>-</>):(<>+</>)}</button>
            </div>
        </div>
        {props.sh==props.index?(<p>{props.content}</p>):(null)}
        </div>
    </>
    )
}