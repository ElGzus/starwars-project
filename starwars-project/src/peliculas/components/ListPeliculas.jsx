import { CardPeli } from "./CardPeli"


export const ListPeliculas = ({moviesss}) => {
  return (
    <div className="row">
    <div className="logo">
         <h5 className="title tc-yellow-400 color-black">Star Wars</h5>
         <h5 className="title tc-yellow-400">Movies</h5>
     </div>
    {
        moviesss.map((item) => {
            return <CardPeli movie={item}/>
        })
    }
 </div>
 
  )
}
