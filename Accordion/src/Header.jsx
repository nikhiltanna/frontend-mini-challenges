import {useState} from 'react';
import OldAccordion from './OldAccordion';
import NewAccordionw from './NewAccordion';

const Header =()=>
{

    const [count,setCount]=useState(false)
    return(
        <>
        <div className='text-xl text-center shadow-xl w-full h-10'>
            <div className='my-10'>
                <h1>Accordion</h1>
            </div>

        </div>
    <div className=' flex justify-center mt-5 '>
        Is multiple open accordion allowed?
        <div>
        <input type="checkbox"  onChange={()=>{setCount(!count)}}/>

        </div>
    </div>
    {count?(<>
        <OldAccordion/></>):(<><NewAccordionw/></>)}
        </>

    )
}
export default Header;