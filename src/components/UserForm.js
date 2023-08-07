import React, { useState } from 'react'
import { useInput } from '../hooks/useInput'

export const UserForm = () => {
   const[firstName,bindFirstName,resetFirstName]=useInput('')
   const[lastName,bindLastName,resetLastName]=useInput('')
    const submitHandle=(e)=>{
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
       <form onSubmit={submitHandle}>
        <div>
            <label>FirstNmae</label>
            <input type="text" {...bindFirstName}/>
        </div>
        <div>
            <label>LastName</label>
            <input type="text" {...bindLastName}/>
        </div>
        <button>Submit</button>
       </form>
    )
}
