import { usePersonajes } from "../hook/usePersonajes";
import { ListPersonaje } from "./components/ListPersonaje";


export const Personajes = () => {
    let persons = usePersonajes();
  return (
    
    <ListPersonaje personajes={persons}/>
  )
}
