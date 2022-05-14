import { useState, useEffect } from 'react'
import React from 'react'

const Book = (props) => {
    const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     setCounter(0)
    // }, [counter])

    return (
        <>
        <h3><font face = "big caslon">{props.title}</font></h3>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button> 
        <h3>{counter}</h3> 
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button> 
  
        </>
      )
}

export default Book