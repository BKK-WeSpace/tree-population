import { useState,useEffect } from 'react'
import './App.css'
import AboutUs from '../src/components/AboutUs/AboutUs'
import reactLogo from './assets/react.svg'
import Loading from './components/Loading'
import useGetTrees from "./data/hooks/useGetTrees";

function App() {
  const [count, setCount] = useState(0)

  const {isLoading, trees} = useGetTrees(); // How to get tree from data hooks
  console.log(isLoading, trees); // Delete this line when the frontend work begins.

  return (
    <div className="App">
      <Loading/>
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
      <AboutUs />
    </div>
  )
}

export default App
