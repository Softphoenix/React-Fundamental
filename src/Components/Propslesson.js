import React from 'react'

// passing props as a string 

export const User = (props) => {
    console.log(props)
    
    return (
        <>
        <h1>{props.firstName} {props.lastName}</h1>
        <p>{props.desc}</p>
        
        </>
    )
}
// passing props as a bullean

export const Status = ({status}) => {
 
    // we make use tenary ot declear
     status = status ? 'old enough to drive' : 'Too young to drive'
    return (
        <>
      <p>
        {status}
      </p>
       </>
    )
}

export const Skills = (props) => <ul>{props.Skills}</ul> 
 
export const GetStarted = (props) => {

    return(
   <>
   <h1>{props.data.welcome}</h1>
   <h2>{props.data.title}</h2>
   <h2>{props.data.prerecusite}</h2>
   <h2>{props.data.address.city}</h2>
   <h2>{props.data.email()}</h2>
   </>
    )
}



 export const Car = (props) => {
   
   return (
    <>
    <h1>Azeez bought {props.data.carName}</h1>
     <h2>{props.data.model}</h2>
      <h1>{props.data.year}</h1>
       <h1>{props.data.price}</h1>
    
    </>
   )
}
