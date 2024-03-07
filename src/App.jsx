import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>

      <Person></Person>
      <Tahfeez></Tahfeez>

    </>
  )
}

function Person() {
  const user = { name: 'Tahfeez Mizan', passion: 'Coding', work: 'software industry' }
  const address = 'bangladesh';
  return (
    <div>
      <h2>Welcome to React World</h2>
      <p>Hi I'm {user.name}, I wark on {user.work}</p>
    </div>
  )
}


function Tahfeez() {
  return (
    <div>
      <h3>Hello Every One</h3>
    </div>
  )
}

function User() {
  const person = { name: 'Farabi', passion: 'Islam', workfor: 'Muhammad sollellahalahiacholom' }
  const address = 'bangladesh';
  return (
    <div>
      <h2>Welcome to React World</h2>
      <p>Hi I'm {user.name}, I wark on {user.work}</p>
    </div>
  )
}


export default App
