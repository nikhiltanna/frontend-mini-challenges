import { useState } from "react";
import data from "./assets/Data.json"
import { Showitem } from "./Showitem";

const OldAccordion=()=>
{
    return(
        <>
        {/* {console.log(data?.accordion[0])} */}
        {data.accordion.map((item,index)=>(
                    <Showitem title={item.title} content={item.content}  sh={false} key={index}/>
        ))}
        </>
    )
}
export default OldAccordion;