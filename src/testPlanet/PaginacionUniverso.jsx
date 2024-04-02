import React from 'react'

export default function PaginacionUniverso({ previous, next, onPrevious, onNext }) {
    const handleAnterior = () => {
        onPrevious();
    }

    const handleSiguiente = () => {
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

