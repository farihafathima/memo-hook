import React, { useMemo,useState } from 'react'

export const Counter = () => {
    const[countOne,setCountOne]=useState(0)
     const[countTwo,setCountTwo]=useState(0)
     const incrementCountOne=()=>{
        setCountOne(countOne+1)
     }
     const incrementCountTwo=()=>{
        setCountTwo(countTwo+1)
     }
     const isEven=useMemo(()=>{
        let i=0
        while(i<200000000)i++
        return countOne%2===0
     },[countOne])
    return (
        <div>
         <div>
         <button onClick={incrementCountOne}>count-{countOne}</button>
         </div>
            
            <span>{isEven?'Even':'Odd'}</span>
            <div>
            <button onClick={incrementCountTwo}>count-{countTwo}</button>
            </div>
            
            
        </div>
    )
}
