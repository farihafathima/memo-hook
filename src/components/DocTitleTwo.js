import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export const DocTitleTwo = () => {
    const[count,setCount]=useState(0)
   useDocumentTitle(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>count-{count}</button>
        </div>
    )
}
