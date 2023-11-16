import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='App'>
    <div className='quote'>
      <h2>New Qoute</h2>
      <small>-Auther</small>
    </div>
    <button className='btn'>Generate new quote</button>
  </div>
  )
}

export default App
