import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Planetas } from './planetas/Planetas'
import { Personajes } from './personajes/Personajes'
import { Peliculas } from './peliculas/Peliculas'
import Universo from './testPlanet/Universo'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route index path='/' element={<Universo/>}/>
      <Route  path='/personajes' element={<Personajes/>} />
      <Route  path='/peliculas' element={<Peliculas/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
