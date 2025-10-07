import React,{useReducer} from "react";
function reducer(state, action){
    switch(action.type){
        case increase:
            return {count : state.count +1};
        case decrement:
            return {count : state.count -1};
        case reset:
            return {count : 0};
        default:
            return state;
        
    }
}
function counter(){
    const[state, dispatch]=useReducer(reducer,{count : 0});
    return(
        <div>
            <button onClick = { ()=> dispatcher(type, "increment")}>+1</button>
            <button onClick = { ()=> dispatcher(type, "decrement")}>-1</button>
            <button onclick= { ()=> dispatcher(type,"reset")}>0</button>
            
        </div>
    );
}