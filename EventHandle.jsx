import React,{useState} from "react";
// child component
function child({handleClick}){
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}
function parent(){
    const showmessage=()=>{
        alert("button clicked from child");
    };
    return(
        <div>
            <h2>Parent component</h2>
            <child handleClick = {showmessage}/>
        </div>
    );
}