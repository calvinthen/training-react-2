import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Class Components
const Card = () =>{
  return (
    <div>
      <h2>
        Card Component
      </h2>
    </div>
  )
} 

function App() {

  return (
    <>
      <h2>Functional Arrow Components</h2>
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
