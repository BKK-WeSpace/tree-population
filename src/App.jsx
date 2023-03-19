import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import useGetTrees from "./data/hooks/useGetTrees";

function App() {
  const [count, setCount] = useState(0)

  const {isLoading, trees} = useGetTrees(); // How to get tree from data hooks
  console.log(isLoading, trees); // Delete this line when the frontend work begins.

  return (
    <div className="App">
      <div>
        <a href="#" target="_blank">
          <img src="/logo.svg" className="logo" alt="WeSpace logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>WeSpace + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
