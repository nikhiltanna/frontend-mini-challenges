import { useState } from "react";
import data from "./assets/Data.json"
import { Showitems } from "./Showitems";

const NewAccordion=()=>
{
    const [details,setDetails]=useState(-1);
   const shdetails=(ind)=>
    {
        details==ind?setDetails(-1):setDetails(ind);
    }
    return(
        <>
        {/* {console.log(data?.accordion[0])} */}
        {data.accordion.map((item,index)=>(
                    <Showitems title={item.title} content={item.content} key={index} shdetails={shdetails} sh={details} index={index}/>
        ))}
        </>
    )
}
export default NewAccordion;