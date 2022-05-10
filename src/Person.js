
import React from 'react'

const Person = (props) => {
    return (
      <>
      {/* <h1> First Name: Harry </h1> */}
      <h1> First Name: {props.name} </h1>
      <h1> Last Name: {props.lastname} </h1>
      <h2> Age: {props.age} </h2>
  
      </>
    )
  }

  export default Person