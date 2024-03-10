import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todu from './todu'

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <Todu task="learn React" isDone={true}></Todu>
      <Todu task="learn Redux" isDone={false}></Todu>
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

function Device({name, price}){
  return <h3>This Devices is {name}, and this price is {price}</h3>
}

export default App
