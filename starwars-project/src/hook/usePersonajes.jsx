import { useEffect,useState } from "react"

export const usePersonajes = () => {
    const [personajes,setPersonajes] = useState([])
    
useEffect( ( )=> {    

    const fetchPersonajes = async () => {
        let response = await fetch('https://swapi.dev/api/people/')
        let data = await response.json()
        let filteredPersonajes = data.results; //Guardamos la informacion que teniamos en una variable
        console.log(data.results); // Vemos la informacion traida de la API

        /*if(planetFilter){
            filteredPlanetas = filteredPlanetas.filter((planet) => planet.planetas === planetFilter )
        }*/
        setPersonajes(filteredPersonajes) // Guardamos la informacion en un estado
    }

    //Filtrar informacion por 2 maneras -> a traves de la respuesta, a traves de la url de la api

    //Ejecutamos la funcion declarada para obtener los datos
    fetchPersonajes();

},[])

    //Retornar (devolver) los datos guardados en mi estado
    return personajes
}
