import React from 'react';
import './App.css';
import myvideo from './asset/video/vid.mp4'
import myimage from './asset/image/soft.jpeg'
import myaudio from './asset/audio/mill.mp3'
import doSomething from './Math.js'
import { addTwo, multiply, subtract, AddThree } from './Math.js'
import * as everything from './Math.js'
import Components, { Button, HexaColor, InputField } from './Components/Component';
import { User, Status, Skills, GetStarted, Car} from './Components/Propslesson'


function App() {
  console.log(addTwo(2,10), multiply(10,10), subtract(20,5))
  console.log(everything)

  // CREATING JSX ELEMENT

  const jsxElement = <h1>I am a jsx Element</h1>
  const welcome = <h1 style={{color: 'red', }}>Welcome to react fundamental</h1>
  const date = <p>December 1st 2022</p>
  const instructor = <h1>MY INSTRUCTOR IS DAVID VICTOR UGBEDE</h1>
  // const mage = <img src={'./asset/image/soft.jpeg'} height={300} width={300}></img>
  
  // INJECTING NUMBER AS A JSX

  const num1 = 14
  const num2 = 15
  const result = (
    <p>
      {num1} + {num2} = {num1 + num2}
    </p>
  )

 const yearOfBirth = 1986
 const currentYear = new Date().getFullYear()
 const age = currentYear - yearOfBirth
 const personAge = <p>{age}</p>

 const Data = {
  welcome: 'Welcome to React Fundamental',
  title: 'Frontend Developer',
  prerecusite: ' HTML, REACT, REDUX, REACT NATIVE, NODE JS, SOFTWARE DEV, JAVASCRIPT, C++ ',

  address: {
    city: 'Texas'
  },

  email:  () => {
    return 'gemjiffy@gmail.com'
}
 
  
 }
  

 const specs = {
  carName: 'Benz',
  model: 'C450',
  year: 2022,
  price: '$500000'
 }


// passing props as Variable
 let firstName = 'Gata'
 let lastName = 'Khalifa'
 let desc = 'He is software developer, he lives in United state of America'

 let current_Year = 2022
 let yearOf_Birth = 2018
 let ag_e = current_Year - yearOf_Birth
 let status = ag_e >= 18

  const header = (
 // INJECTING HEADER ELEMENT AS JSX

  <header>
    {/* <h1>I am a jsx Element</h1>
    <h1>Welcome to react fundamental</h1>
    <p>December 1st 2022</p> */}
    {jsxElement}
     {welcome}
     {date}
   <p>I am frontend engineer, i can help you make your website looks charming</p>
    <h3>My Name is SoftPhoenix</h3>
    <h2>Reacr is a javascript Library</h2>

        
  </header>)
 // INJECTING AN ARRAY AS JSX ELEMENT
 const tech = ['Html', 'Css', 'javascript', 'python', 'react Native', 'Redux']
 const techFormatted = tech.map((index) => <li>{index}</li>)
  
 // INJECTING AN OBJECT AS JSX ELEMENT

 const teacher = {
  firstName: 'Azeez', 
  lastName: 'Rasheed', 
  country: 'Nigeria',
}

 
const main = (
  <div className='container' >
    <h2>Prerequisite of doing React</h2>
    <ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JAVASCRIPT</li>
    </ol>
    {instructor}
    {result}
    {personAge}
    {currentYear}
    <ul>{tech}</ul>
   <div>{teacher.firstName} {teacher.lastName} is {age} years old and from {teacher.country}</div>
    
    
    
  </div>
)
const footer = (
  <p>COPYRIGHT @2022 BUILT BY SoftPhoenix</p>
)
return (
// WE ARE INJECTING JS
    <>
     {/* {jsxElement}
     {welcome}
     {date} */}
     {header}
     {main}
     {footer}
     {techFormatted}
     {/* <img src='./image/soft.jpeg' height={300} width={300}/> */}
     <Components/>
      <HexaColor/>
      <Button/>
      <InputField/>

      //passing  props as string
      <User firstName= 'Azeez'
       lastName='Rasheed' 
       desc='He is a frontend engineer and he lives in Abuja'
       />

       //passing  props as variable
       <User 
       firstName = {firstName}
       lastName = {lastName}
       desc = {desc}
       />
       <Status status={status} />
       <Skills Skills= {['PYTHON', 'REACT', 'REDUX', 'REACT NATIVE', 'NODE JS', 'SOFTWARE DEV', 'JAVASCRIPT', 'C++']}
       />
      <GetStarted data= {Data}/>
      <AddThree/>
      <Car data={specs}/>
     
     <h1> My Favorite Fruit</h1>
     <ul>
      <li>Orange</li>
      <li>Guava</li>
      <li>Apple</li>
      <li>Water Mellon</li>
     </ul>
     <h1>My favorite programming Language</h1>
     <ul style={{textTransform: 'capitalize', color: 'greenyellow', fontSize: '20px', backgroundColor: 'green',}}>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>REACT</li>
      <li>REDUX</li>
      <li>PYTHON</li>
      <li>REACT NATIVE</li>
     </ul>

     <p>My Name is Rasheed Azeez, Am a frontend Engineer and My Boss and as the same time a Mentor Name is DAVID VICTOR UGBEDE ,,..Am open to buisness at any moment, I will  build an astonished website for you.Our goal is "CUSTOMER IS ALWAYS RIGHT"</p>

     <video
     src= {myvideo}
     controls
     height={300}
     width={300}
     autoPlay
     
    //  muted
    //  loop
    
  
     />

 <img
src= {myimage}
height= {300}
width= {300}

alt=''

/>
< myimage />


      {/* <img height={300} width={300} src={myimage} alt=""/> */}
   

<audio
src= {myaudio}
controls
autoPlay

/>
<div style={styles.bg}></div>
<div>
  {techFormatted}
</div>

    </>
    
  );
    

        // Creat react Element 
  // return  React.createElement("div", null,
  // React.createElement('h1', null, 'I love React')
  
  // )
 }

const styles = {
  title: {
    fontSize: '25px',
    textTransform: 'uppercase',
    color: 'green',
  },
  bg:{
    backgroundImage: `url(${myimage})`,
    height: '300px',
    width: '400px',
    backgroundRepeat: 'no-repeat',
  },
}
// const image = {
//   height: 300,
//   width: 300,
//   borderRadius: '100%'
// }

export default App;
