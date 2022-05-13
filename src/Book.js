import { useState } from 'react'
import React from 'react'

const Book = (props) => {
    const [counter, setCounter] = useState(0)

    return (
        <>
        <h3>Book: {props.title}</h3>
        <button>+</button> <h3>{counter}</h3> <button>-</button> 
  
        </>
      )
}

export default Book