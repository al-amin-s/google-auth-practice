
import { Outlet } from 'react-router-dom'
import './App.css'
import Nave from './Components/Nave'


function App() {
  

  return (
    <>
    <Nave></Nave>
    <Outlet></Outlet>
    </>
  )
}

export default App
