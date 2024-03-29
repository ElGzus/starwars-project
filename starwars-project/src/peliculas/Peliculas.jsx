import { ListPeliculas } from './components/ListPeliculas';

export const Peliculas = () => {
    let movies = usePeliculas();
    return (
      
      <ListPeliculas moviesss={movies}/>
    )
  }