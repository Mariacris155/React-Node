import Peliculas from "./Peliculas"

function Catalogo(props) {
    return (
        <div className='catalogo'>
            {props.videoclub.map((peliculas, index)=> {
                return <Peliculas full={false} cartel={peliculas.cartel} titulo={peliculas.titulo}
            })}
        </div>
    )


}

export default Catalogo