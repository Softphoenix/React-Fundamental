import React from 'react'
import myImage from '../asset/image/soft.jpeg'

const UserCard = () => {
  const person = {
     firstName: 'Azeez',
     lastName: 'Rasheed',
     title: "FrontEnd Engineer"
  }
  return (
    <>
    <div className='card'>
      <div>
      
      <img
      className='imge'
      src={myImage}
      height={300}
      width={300}
      alt='hello'
      />
      <div className='tex'>{person.firstName} {person.lastName} <br/>
      {person.title}</div>
      </div>
      </div>
    </>
  )
}


export const HexaColor = () => {
  const hexadecimal = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i ++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return  '#' + color 
  }
  
   return <div>
        <h1>{hexadecimal()}</h1>
   </div>
  
  }

  export const Button = () => <button className='btn' style={{backgroundColor: 'rgb(150, 210, 30)', color: 'white', padding: '10px 15px', cursor: 'pointer', border: 'ipx solid red',method: 'post'}}>Submit</button>
  

  export const InputField = ({ value, label, name, placeholder, type, onChange }) => (
    <form>
    <div className="form-group" style={{ color: 'blue', fontSize: '25px'}}>
      FirstName
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        // placeholder={placeholder}
        // onChange={onChange}
      />
      LastName
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        // placeholder={placeholder}
        // onChange={onChange}
      />
      <Button/>
    </div>
    </form>
  );


  
  // export default InputField;


// const Components = () => {
//   return (
//     <>
//     <form className='store-selector' style={{margin: '100px', width: '30%'}}>
//       <div style={{backgroundColor: 'yellowgreen', color: 'black', paddingLeft: '20%',  gap: '10px', }}>
//     <h1>Please Fill </h1>
//    FirstName <input type='text' required placeholder='First-Name'/>
//     {/* <button type='submit' ></button> */}
//     <br/>
//    LastName <input type='text' required placeholder='Last-Name'/>
//     {/* <button type='submit' >Visit store </button> */}
//     <br/>
//     DOB<input type='Date' required placeholder='DOB'/>
//     <br/>
//     Nationality<input type='text' required placeholder='Nationality'/>
//     <br/>
//     SOO<input type='text' required placeholder='State of Origin'/>
//     <br/>
//    Cv <input type='file' required placeholder='Cv'/>
//     <br/>
//     <button type='submit' style={{cursor: 'pointer', backgroundColor: 'black', color: 'white', fontSize: '15px' }}>Submit </button>
//     </div>
//     </form>
//       <UserCard/>
//      <div>
//        <HexaColor/>
//      </div>
//      <Button/>
     
//      <InputField/>
     

//     </>
    
//   )
// }

class Components extends React.Component {
  render() {
    return(
      <>
      <form className='store-selector' style={{margin: '100px', width: '20%', border: '1px solid red'}}>
        <div style={{backgroundColor: 'yellowgreen', color: 'black', paddingLeft: '20%',  gap: '10px', border: '2px solid black'}}>
      <h1>Please Fill </h1>
     <input type='text' required placeholder='First-Name'/>
      {/* <button type='submit' ></button> */}
      <br/>
     <input type='text' required placeholder='Last-Name'/>
      {/* <button type='submit' >Visit store </button> */}
      <br/>
      <input type='Date' required placeholder='DOB'/>
      <br/>
      <input type='text' required placeholder='Nationality'/>
      <br/>
      <input type='text' required placeholder='State of Origin'/>
      <br/>
      <input type='file' required placeholder='Cv'/>
      <br/>
      <select name='status'>
      <option>Abuja</option>
      <option>Lagos</option>
      <option>Delta</option>
      <option>Benue</option>
      
      </select>
      <br/>
      <button type='submit' style={{cursor: 'pointer', backgroundColor: 'black', color: 'white', fontSize: '15px' }}>Submit </button>
      </div>
      </form>
        <UserCard/>
       <div>
         <HexaColor/>
       </div>
       <Button/>
       
       <InputField/>
       
  
      </>
      
    )
  }
}

export default Components;