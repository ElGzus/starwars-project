import React, { useState } from 'react'


export default function PaginacionPersonaje({ previous, next, onPrevious, onNext }) {
    const [index, setIndex] = useState(0);

    const handleAnterior = () => {
        onPrevious();
    }

    const handleSiguiente = () => {
        setIndex(index => index + 1)
        onNext();

    }

    return (
        <div>
            <ul className='pagination justify-content-center'>
                {
                    previous ? (
                        <li className='page-item'>
                            <button className='page-link' onClick={handleAnterior}>Anterior</button>
                        </li>
                    ) : null
                }
                {
                    next ? (
                        <li className='page-item'>
                            <button className='page-link' onClick={handleSiguiente}>Siguiente</button>
                        </li>
                    ) : null
                }
            </ul>
        </div>
    )
}



