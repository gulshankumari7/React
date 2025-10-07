import React, {useEffect, useState} from "react";
function Effects(){
    const[count, setCount]= useState(0);
    useEffect(()=>{
    document.title=`count ${count}`;
    return()=>{
    console.log("cleanup before usestate");
    };
},[count]);
return<button onClick = {()=> setCount (count+1)}>Click {coount}</button>
}