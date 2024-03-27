
import React from 'react'
import { Card } from './Card'

export const ListPersonaje = ({personajes}) => {
  return (
   
     <div className="row">
       <div className="logo">
            <h5 className="title tc-yellow-400 color-black">Star Wars</h5>
            <h5 className="title tc-yellow-400">Characters</h5>
        </div>
       {personajes.map( (person) => {
        return <Card person={person} />
        }
    )}
    </div>
    
  )
}
