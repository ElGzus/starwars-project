import React from 'react'
import CardPersonaje from './CardPersonaje';
import PaginacionPersonaje from './PaginacionPersonaje';
import { useEffect, useState } from 'react';

export default function Personajes() {
  const [personajes,setPersonajes] = useState([]);
    const [info, setInfo] = useState([]);

    const url1 = 'https://swapi.dev/api/people/';

    const fetchPersonajes = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        setPersonajes(data.results); // Guardamos la informacion en un estado
        setInfo(data)
    }

    const onPrevious = () => {
        fetchPersonajes(info.previous);
    }

    const onNext = () => {
        fetchPersonajes(info.next);
    }

    useEffect(() => {
        fetchPersonajes(url1);
    }, [])

    console.log(info)
    return (
        <>
            <PaginacionPersonaje previous={info.previous} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
            <CardPersonaje personajes={personajes} />
        </>
        
    )
}
