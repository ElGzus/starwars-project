import React, { useEffect, useState } from 'react'
import CardUniverso from './CardUniverso';
import PaginacionUniverso from './PaginacionUniverso';

export default function Universo() {
    const [planetas,setPlanetas] = useState([]);
    const [info, setInfo] = useState([]);

    const url1 = 'https://swapi.dev/api/planets/';
    
    const fetchPlanetas = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        setPlanetas(data.results); // Guardamos la informacion en un estado
        setInfo(data)
    }

    const onPrevious = () => {
        fetchPlanetas(info.previous);
    }

    const onNext = () => {
        fetchPlanetas(info.next);
    }

    useEffect(() => {
        fetchPlanetas(url1);
    }, [])

    console.log(info)
    return (
        <>
            <PaginacionUniverso previous={info.previous} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
            <CardUniverso planetas={planetas} />
        </>
        
    )
}
