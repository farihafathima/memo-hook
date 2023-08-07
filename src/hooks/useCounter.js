import { useState } from "react"

export const useCounter = (initialCount=0,value=1) => {
   
    const[count,setCount]=useState(initialCount)
    const increment=()=>{
        setCount((pre)=>pre+value)
    }
    const decrement=()=>{
        setCount((pre)=>pre-value)
    }
    const reset=()=>{
        setCount(initialCount)
    }
    return [count,increment,decrement,reset]
}
