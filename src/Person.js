
import React from 'react'

const Person = (props) => {
    return (
      <>
      {/* <h1> First Name: Harry </h1> */}
      <h3>Reader: {props.name}</h3>
      {/* <h3> Last Name: {props.lastname} </h3> */}
      <h3> Age: {props.age} </h3>
  
      </>
    )
  }

  export default Person