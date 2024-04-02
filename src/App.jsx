import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './principal/Welcome';
import { Homepage } from './principal/HomePage';
import Personajes from './Characters/Personajes';
import Universo from './testPlanet/Universo';
import Peliculas from './Movies/Peliculas';


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Welcome />} />
          <Route path='/starwars-project/src/principal/HomePage.jsx' element={<Homepage />} />
          <Route path='/starwars-project/src/Characters/Personajes.jsx' element={<Personajes />} />
          <Route path='/starwars-project/src/testPlanet/Universo.jsx' element={<Universo />} />
          <Route path='/starwars-project/src/Movies/Peliculas.jsx' element={<Peliculas />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App