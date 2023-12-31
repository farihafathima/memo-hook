import React from 'react'
import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterTwo = () => {
    const[count,increment,decrement,reset]=useCounter(8,8)
   
    return (
        <div>
            <h2>Count-{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
