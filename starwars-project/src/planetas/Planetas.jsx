import React from 'react'
import { ListPlanets } from './components/ListPlanets'
import { UsePlanetas } from '../hook/UsePlanetas';


export const Planetas = () => {

    let planetas = UsePlanetas();
  return (
    <>
    <ListPlanets planets={planetas}/>
    </>
  )
}
