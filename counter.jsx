import React,{useReducer} from "react";
function useReducer(state,action){
    switch(action.type){
        case increment : 
            return{count: state.count +1};
        case decrement :
            return{count: state.count -1};
        case reset : 
            return{count: 0};
            default :
        return state;

    }
}
 function counter(){
    const[state, dispatch]= useReducer(useReducer,{count : 0});
    return(
        <div>
            <h2> counter{state.count}</h2>
            <button onClick={()=> dispatch (type,"increment")}>+
            </button>
            <button onClick ={()=> dispatch (type, decrement)}>-</button>
            <button onclick ={()=> dispatch(type,reset)}>0</button>
        </div>
    );
 }
 export default counter;