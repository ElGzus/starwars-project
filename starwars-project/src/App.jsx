import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Planetas } from './planetas/Planetas'
import { Personajes } from './personajes/Personajes'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route index path='/' element={<Planetas/>}/>
      <Route  path='/personajes' element={<Personajes/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
