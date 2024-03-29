import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Peliculas } from './peliculas/Peliculas'
import Universo from './testPlanet/Universo'
import Personajes from './Characters/Personajes'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route index path='/' element={<Universo/>}/>
      <Route  path='/personaje' element={<Personajes/>} />
      <Route  path='/peliculas' element={<Peliculas/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
