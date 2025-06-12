import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Class Components
const Card = ({title}) =>{
  const [liked, setLiked] = useState(false);

  return (
    <div className='card'>
      <h2>
        {title}
        <button onClick={() => setLiked(!liked)}>
         {liked ? '❤️' : '🤍'}
        </button>
      </h2>
    </div>
  )
} 

function App() {
  

  return (
    <>
      <div className='card-container'>
        <Card title={"Naruto"}/>
        <Card title={"One piece"}/>
        <Card title={"Haikyu"}/>
      </div>
      
    </>
  )
}

export default App
