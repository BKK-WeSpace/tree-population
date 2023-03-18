import { useState } from 'react'
import './App.css'
import AboutUs from '../src/components/AboutUs/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AboutUs/>
    </div>
  )
}

export default App
