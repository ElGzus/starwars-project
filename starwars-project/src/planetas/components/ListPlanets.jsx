import { Cards } from "./Cards"


export const ListPlanets = ({planets}) => {
  
    return (
        <>
        <div className="row">
          <div className="logo">
            <h5 className="title tc-yellow-400 color-black">Star Wars</h5>
            <h5 className="title tc-yellow-400">Planets</h5>
        </div>
            {planets.map( (planet) => {
            return <Cards planet={planet} />
            }
            )}
        </div>
        </>
      )
    }
