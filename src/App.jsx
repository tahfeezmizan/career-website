import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todu from './todu'
import People from './Person'
import Actors from './Actors'
<<<<<<< HEAD
import Singers from './Singer'
import Teacher from './Teacher'
=======
>>>>>>> f512e7e5307f158496cf017e2f3286a69d0c66ac


function App() {
  const actors = ['jahed khan', 'soriful raj', 'Riaz', 'Sakib khan', 'Bappi'];
<<<<<<< HEAD

  const singers = [
    { name: 'Habib Wahid', age: 34 },
    { name: 'zunayed evan', age: 31 },
    { name: 'lincoln d costa', age: 40 },
    { name: 'Pritom Hasan', age: 26 },
    { name: 'Sumon', age: 33 },
  ]

  const teachers = [
    { name: 'Kanai', subject: 'English' },
    { name: 'Jolil', subject: 'Bangla 2nd Part' },
    { name: 'Abir', subject: 'Math' },
    { name: 'Soton', subject: 'Geography' },
    { name: 'Palash', subject: 'Science' },
  ]
=======
>>>>>>> f512e7e5307f158496cf017e2f3286a69d0c66ac

  function handleClick() {
    alert('button click')
  }

  const clickHere = () => {
    prompt('Hello')
  }

  // const getPoint = () => {
  //   alert('Congratulation You Get point')
  // }

  const calculateOnPrompt = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={clickHere}>Click Here</button>
        <button onClick={() => alert("Congratulation You Get point")}>Get Point</button>

        {/* hard  */}
        <button onClick={() => calculateOnPrompt(10)}>Click</button>
      </div>

      <Actors name="Mojnu"></Actors>

      {
<<<<<<< HEAD
        teachers.map(teaching => <Teacher sir={teaching} ></Teacher>)
      }

      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }

      {/* <Actors name="Mojnu"></Actors> */}

      {/* {
        actors.map(actor => <Actors name={actor} ></Actors>)
      } */}

=======
        actors.map(actor => <Actors name={actor} ></Actors>)
      }

>>>>>>> f512e7e5307f158496cf017e2f3286a69d0c66ac
      {/* <People></People>
      <Todu task="learn React" isDone={true}></Todu>
      <Todu task="learn Redux" isDone={false}></Todu> */}

      {/* <Device name="Laptop" price="86000"></Device>
      <Device name="Mobile" price="2000"></Device>
      <Device name="Desktop Computer" price="100000"></Device>
      <Developer></Developer>
      <Random></Random> */}
    </>
  )
}


function Developer() {
  return (
    <div className='developer'>
      <h4>Hello Dev</h4>
      <p>coding: </p>
    </div>
  )
}

function Random() {
  const devStyle = {
    paddign: '20px',
    border: '2px solid green',
    borderRadius: '15px'
  }
  return (
    <div style={devStyle}>
      <h3>i started React</h3>
      <p>react is javascript libary</p>
    </div>
  )
}

function Device({ name, price }) {
  return <h3>This Devices is {name}, and this price is {price}</h3>
}

export default App
