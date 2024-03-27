
import { useEffect,useState } from "react"

export const UsePlanetas = (planetFilter) => {
    const [planetas,setPlanetas] = useState([])
    
useEffect( ( )=> {    

    const fetchPlanetas = async () => {
        let response = await fetch('https://swapi.dev/api/planets/')
        let data = await response.json()
        let filteredPlanetas = data.results; //Guardamos la informacion que teniamos en una variable
        console.log(data.results); // Vemos la informacion traida de la API

        /*if(planetFilter){
            filteredPlanetas = filteredPlanetas.filter((planet) => planet.planetas === planetFilter )
        }*/
        setPlanetas(filteredPlanetas) // Guardamos la informacion en un estado
    }

    //Filtrar informacion por 2 maneras -> a traves de la respuesta, a traves de la url de la api

    //Ejecutamos la funcion declarada para obtener los datos
    fetchPlanetas();

},[planetFilter])

    //Retornar (devolver) los datos guardados en mi estado
    return planetas
}
